import axios from "axios";
import { useEffect, useState } from "react";

const Daylight = (props: any) => {
  // State variables to store sunrise and sunset times
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  // Function to fetch sunrise and sunset times from API
  const fetchData = async () => {
    try {
      const result = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: props.latitude,
          longitude: props.longitude,
          daily: "sunrise,sunset",
          timezone: "auto",
        },
      });

      // Extract sunrise time and format it
      const sunrise = result.data.daily.sunrise[0];
      const sunriseTime = sunrise.split("T")[1];

      // Extract sunset time and format it
      const sunset = result.data.daily.sunset[0];
      const sunsetTime = sunset.split("T")[1];
      const [hours, minutes] = sunsetTime.split(":");
      let hoursIn12HrFormat = parseInt(hours) % 12 || 12; // Convert 24-hour to 12-hour format, handling midnight as 12
      const setTime = `${hoursIn12HrFormat}:${minutes}`;

      // Set the state variables with formatted sunrise and sunset times
      setSunrise(sunriseTime);
      setSunset(setTime);
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  // Effect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // Render sunrise and sunset times
    <div className="flex flex-row gap-8 w-full sm:flex-col sm:gap-12 lg:gap-8 lg:w-auto">
      {/* Sunrise section */}
      <div className="relative flex justify-center items-center w-full sm:h-32 md:h-36 lg:h-44 lg:w-auto">
        <img
          src="https://freedesignfile.com/upload/2017/01/Sunrise-scenery-HD-picture.jpg"
          alt="Sunrise"
          className="object-cover rounded-lg w-full h-full"
        />
        {/* Display sunrise time */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mb-4">
          <p className="text-xs sm:text-sm md:text-lg">Sunrise</p>
          <h4 className="text-sm sm:text-lg md:text-xl">{`${sunrise} am`}</h4>
        </div>
      </div>
      {/* Sunset section */}
      <div className="relative flex justify-center items-center w-full sm:h-32 md:h-36 lg:h-44 lg:w-auto">
        <img
          src="images/sunset.jpg"
          alt="Sunset"
          className="object-cover rounded-lg w-full h-full"
        />
        {/* Display sunset time */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mb-4">
          <p className="text-xs sm:text-sm md:text-lg">Sunset</p>
          <h4 className="text-sm sm:text-lg md:text-xl">{`${sunset} pm`}</h4>
        </div>
      </div>
    </div>
  );
};

export default Daylight;

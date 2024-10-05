import React from "react";

const AboutUs = () => {
  return (
    // Section containing information about the application
    <>
      <section className="relative bg-gray-100 text-black p-8" id="aboutus">
        {/* Grid layout for displaying features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center md:-mx-4">
          {/* Individual feature cards */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            {/* Icon for the feature */}
            <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
              <i className="fa fa-cloud"></i>
            </h2>
            {/* Title of the feature */}
            <h4 className="text-xl font-bold">Current Weather</h4>
            {/* Description of the feature */}
            <p className="mt-1">
              Displays real-time weather conditions, including temperature,
              humidity, and wind speed
            </p>
          </div>

          {/* Repeat the above structure for other features */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
              <i className="fa fa-sun"></i>
            </h2>
            <h4 className="text-xl font-bold">Sunrise and Sunset</h4>
            <p className="mt-1">
              Provides accurate sunrise and sunset times for any location,
              helping users plan their day accordingly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
              <i className="fa fa-map"></i>
            </h2>
            <h4 className="text-xl font-bold">Map</h4>
            <p className="mt-1">
              Displays selected locations on an interactive map, allowing users
              to view weather conditions and forecasts for specific areas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
              <i className="fa fa-hourglass-start"></i>
            </h2>
            <h4 className="text-xl font-bold">Detailed Forecasts</h4>
            <p className="mt-1">
              Delivers comprehensive weather forecasts, including hourly, daily,
              and extended outlooks, enabling users to plan ahead with
              confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

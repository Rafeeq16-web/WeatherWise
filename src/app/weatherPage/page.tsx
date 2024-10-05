"use client"; // Directive for Next.js to enable client-side rendering

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import CurrentWeather from "@/components/weatherPage/CurrentWeather";
import Daylight from "@/components/weatherPage/Daylight";
import TabList from "@/components/weatherPage/TabList";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/weatherPage/Loader";

export default function Page() {
  // Extract search parameters from the URL
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // State for current date and loading status
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  // Effect to set the current date in a formatted string
  useEffect(() => {
    const currentDate = new Date();
    const newDateString = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
    });
    const newDay = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const finalDate = `${newDay}, ${newDateString}`;
    setDate(finalDate);
  }, []);

  // Effect to simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loading for 1 second

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Memoized dynamic import of the Map component
  const Map = useMemo(
    () => dynamic(() => import("@/components/weatherPage/Map")),
    []
  );

  // Render loading spinner if data is still loading
  if (loading) {
    return <Loader />;
  }

  // Main content when loading is complete
  return (
    <main>
      <div className="bg-gray-100 relative min-h-screen">
        <section className="rounded-lg bg-slate-400 relative lg:p-10 xl:p-12 2xl:p-14">
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg"
              alt="background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="text-white relative z-10 mx-auto w-full p-8 lg:p-0 xl:p-4">
            <div className="flex flex-col mb-8 mt-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {date}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-9">
              {/* CurrentWeather component */}
              <div className="lg:col-span-2 sm:col-span-2">
                <CurrentWeather
                  latitude={lat}
                  longitude={lng}
                  className="w-full"
                />
              </div>
              {/* Daylight component */}
              <div className="lg:col-span-1 sm:col-span-1">
                <Daylight latitude={lat} longitude={lng} className="w-full" />
              </div>
              {/* Map component */}
              <div className="lg:col-span-2 sm:col-span-3">
                <Map coordinates={[lat, lng]} />
              </div>
            </div>

            {/* TabList component */}
            <div className="mt-8 lg:mt-12">
              <TabList latitude={lat} longitude={lng} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

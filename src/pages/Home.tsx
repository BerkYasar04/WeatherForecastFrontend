import { useQuery } from "@tanstack/react-query";

import React from "react";
import WeatherCard from "../components/WeatherCard";

const Home: React.FC = () => {
  const { isPending, error, data } = useQuery<Province[]>({
    queryKey: ["MainWeatherData"],
    queryFn: () =>
      fetch("http://localhost:5207/wfapi/WeatherForecast/GetProvinces").then(
        (res) => res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const res = data;
  return (
    <div className="flex flex-wrap mx-auto max-w-screen-xl">
      {res.map((data, index) => (
        <WeatherCard
          merkezId={data.merkezId}
          city={data.province}
          key={index}
          eventCode={data.eventCode}
          humidity={data.humidity}
          precipitation={data.precipitation}
          temperature={data.temperature}
          isNavigate={true}
        />
        // <div
        //   key={index}
        //   className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4"
        // >
        //   <div className="bg-gray-200 p-4 rounded-lg flex flex-wrap justify-between items-center">
        //     <div>
        //       <h2 className="text-lg font-semibold">{data.province}</h2>
        //       <p className="text-gray-600">{String(data.temperature)}°C</p>
        //     </div>
        //     <img
        //       className="w-[3rem]"
        //       src={"events/" + data.eventCode.toLowerCase() + ".svg"}
        //       alt={data.event}
        //     />
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default Home;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
const ProvinceDetail: React.FC = () => {
  const { merkezId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["repo1Data", merkezId],
    queryFn: () =>
      fetch(
        "http://localhost:5207/wfapi/WeatherForecast/GetDistricts?province=" +
          merkezId
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const res: Array<District> = data;
  return (
  <div className="flex flex-wrap mx-auto max-w-screen-xl">
    {res.map((data, index) => (
      <WeatherCard
        merkezId={data.merkezId}
        city={data.district}
        key={index}
        eventCode={data.eventCode}
        humidity={data.humidity}
        precipitation={data.precipitation}
        temperature={data.temperature}
        isNavigate={false}
      />
    ))}
  </div>
  );
};

export default ProvinceDetail;

import React from "react";
import { useNavigate } from "react-router-dom";

interface AppProps {
  merkezId: Int16Array;
  key: number;
  city: string;
  temperature: DoubleRange;
  humidity: Int16Array;
  precipitation: DoubleRange;
  eventCode: string;
  isNavigate: boolean;
}

const WeatherCard: React.FC<AppProps> = ({
  city,
  temperature,
  humidity,
  precipitation,
  eventCode,
  isNavigate
}: AppProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div
        className="max-w-xs flex items-center rounded overflow-hidden shadow-xl bg-gray-200 button"
        onClick={() => {
          if (isNavigate) {
            navigate("/detail/" + city);
          }
        }}
      >
        <img
          className="w-[5rem]"
          src={"/events/" + eventCode.toLowerCase() + ".svg"}
          alt={eventCode.toLowerCase()}
        />
        <br />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{city}</div>
          <p className="text-gray-700 text-base">
            <span className="font-semibold">Sıcaklık:</span>{" "}
            {String(temperature)}
            °C
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-semibold">Nem:</span> {humidity}%
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-semibold">Yağış:</span>{" "}
            {String(precipitation)} mm
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

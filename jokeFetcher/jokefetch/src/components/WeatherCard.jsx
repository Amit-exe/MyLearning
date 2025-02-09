import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData)
    return <div className="text-center text-gray-500">Loading...</div>;

  const { location, current } = weatherData;

  return (
    <div className="flex justify-center items-center h-1/2 p-20 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {location.name}, {location.region}
        </h2>
        <p className="text-sm text-gray-500">{location.country}</p>
        <div className="mt-4">
          <img
            src={current.condition.icon.replace("//", "https://")}
            alt={current.condition.text}
            className="mx-auto w-20"
          />
          <p className="text-lg font-medium text-gray-700">
            {current.condition.text}
          </p>
        </div>
        <h1 className="text-4xl font-bold mt-2">{current.temp_c}°C</h1>
        <p className="text-sm text-gray-500">
          Feels like {current.feelslike_c}°C
        </p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-gray-100 p-2 rounded-md">
            <p className="font-semibold">Wind</p>
            <p>
              {current.wind_kph} km/h {current.wind_dir}
            </p>
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <p className="font-semibold">Humidity</p>
            <p>{current.humidity}%</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <p className="font-semibold">Pressure</p>
            <p>{current.pressure_mb} mb</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <p className="font-semibold">Visibility</p>
            <p>{current.vis_km} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

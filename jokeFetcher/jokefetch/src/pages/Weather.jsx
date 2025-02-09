import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import CityDropdown from "../components/CityDropDown";
import { fetchWeather } from "../utils/fetchWeather";
import { fetchIPLocation } from "../utils/fetchIPLocation";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const cityOptions = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Chandigarh",
    "Surat",
    "Lucknow",
    "Kochi",
    "Indore",
    "Patna",
    "Bhopal",
    "Nagpur",
    "Visakhapatnam",
    "Coimbatore",
    "Vadodara",
  ];

  useEffect(() => {
    const getcity = async () => {
      const city = await fetchIPLocation();
      console.log(city);
      setCity(city);
    };

    getcity();
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeather(city);
      setWeatherData(data);
    };

    getWeatherData();
  }, [city]);

  return (
    <div className="flex flex-col items-center my-10">
      <WeatherCard weatherData={weatherData} />

      {/* City Dropdown */}
      <CityDropdown options={cityOptions} setCity={setCity} city={city} />
    </div>
  );
};

export default Weather;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // Replace with your API key
const CITY = "Nairobi"; // Change this to any city you want

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p className="text-center">Loading weather...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p className="text-3xl font-semibold">{weather.main.temp}°C</p>
    </div>
  );
};

export default Weather;

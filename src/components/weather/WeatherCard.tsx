import React from "react";

interface WeatherData {
  name: string;
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; humidity: number; feels_like: number };
  wind: { speed: number };
  visibility: number;
  sys: { country: string; sunrise: number; sunset: number };
}

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, weather, main, wind, visibility, sys } = data;
  const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto" />
      <p className="text-xl">{weather[0].main}</p>
      <p className="text-3xl font-semibold">{main.temp}°C</p>
      <div className="mt-4 space-y-1 text-sm">
        <p>Feels like: {main.feels_like}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
      <div>
        <p>Visibility: {(visibility / 1000).toFixed(2)} km</p>
        <p>Sunrise: {sunriseTime}</p>
        <p>Sunset: {sunsetTime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;

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
    <div>
      <div className="bg-white bg-origin-border hover:bg-origin-padding dark:bg-gray-800 shadow-lg rounded-lg p-6 w-96 text-center">
  <h2 className="text-2xl font-bold text-gray-600 dark:text-neutral-200 mb-2">{name}</h2>
  <img src={iconUrl} alt={weather[0].description} className="mx-auto" />
  <p className="text-xl">{weather[0].main}</p>
  <p className="text-3xl font-semibold">{main.temp}°C</p>

  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md">
      <p className="font-semibold">Feels Like</p>
      <p>{main.feels_like}°C</p>
    </div>
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md">
      <p className="font-semibold">Humidity</p>
      <p>{main.humidity}%</p>
    </div>
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md">
      <p className="font-semibold">Wind</p>
      <p>{wind.speed} m/s</p>
    </div>
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md">
      <p className="font-semibold">Visibility</p>
      <p>{(visibility / 1000).toFixed(2)} km</p>
    </div>
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md col-span-2">
      <p className="font-semibold">Sunrise</p>
      <p>{sunriseTime}</p>
    </div>
    <div className="bg-gray-100 hover:bg-lime-400 dark:hover:bg-cyan-900 dark:bg-gray-700 p-3 rounded shadow-md col-span-2">
      <p className="font-semibold">Sunset</p>
      <p>{sunsetTime}</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default WeatherCard;

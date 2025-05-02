import React from 'react';

interface WeatherData {
  name: string;
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, weather, main, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto" />
      <p className="text-xl">{weather[0].main}</p>
      <p className="text-3xl font-semibold">{main.temp}°C</p>
      <div className="mt-4 space-y-1 text-sm">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
// "main": {
//   "temp": 5.88,
//   "feels_like": 3.75,
//   "temp_min": 5.88,
//   "temp_max": 5.88,
//   "pressure": 1021,
//   "humidity": 89,
//   "sea_level": 1021,
//   "grnd_level": 984
// },
// "visibility": 10000,
// "wind": {
//   "speed": 2.74,
//   "deg": 268,
//   "gust": 4.71
// },
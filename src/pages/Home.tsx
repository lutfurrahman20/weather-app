import  { useState } from 'react';
import SearchBar from '../components/weather/SearchBar';
import WeatherCard from '../components/weather/WeatherCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchWeather } from '../features/weather/weatherSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.weather);
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity(""); 
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-10 gap-6">
      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && <WeatherCard data={data} />}
    </div>
  );
};

export default Home;

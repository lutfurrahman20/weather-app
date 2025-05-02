import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearHistory } from "../../features/weather/weatherSlice";

const SearchHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.weather.searchHistory);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Search History</h3>
        <button
          onClick={() => dispatch(clearHistory())}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm"
          >
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <div className="flex items-center space-x-3">
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-10 h-10"
              />
              <div>
                <p>{item.weather[0].main}</p>
                <p>{item.main.temp}°C</p>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-500">
              Feels like {item.main.feels_like}°C, Wind {item.wind.speed} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;

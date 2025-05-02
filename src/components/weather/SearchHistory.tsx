import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearHistory } from '../../features/weather/weatherSlice';

const SearchHistory = () => {
  const history = useSelector((state: RootState) => state.weather.searchHistory);
  const dispatch = useDispatch(); 

  return (
    <div>
      <div className="mt-4">
        <h3 className="font-bold text-lg">Search History</h3>
        <ul className="list-disc pl-5">
          {history.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <button
          onClick={() => dispatch(clearHistory())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Clear History
        </button>
      </div>
    </div>
  );
};

export default SearchHistory;

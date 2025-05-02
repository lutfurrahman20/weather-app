import SearchHistory from "./components/weather/SearchHistory";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <SearchHistory />
      <Home />
    </div>
  );
};

export default App;

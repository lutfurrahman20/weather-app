import { useEffect } from "react";
import SearchHistory from "./components/weather/SearchHistory";
import Home from "./pages/Home";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/NavBar";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Home />
        <SearchHistory />
        
      </div>
    </div>
  );
};

export default App;

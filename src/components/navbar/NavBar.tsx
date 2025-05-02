import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Moon, Sun } from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-violet-200 dark:bg-gray-900 z-10 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        WeatherApp
      </h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="text-gray-800 dark:bg-gray-800/70 backdrop-blur-sm dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;

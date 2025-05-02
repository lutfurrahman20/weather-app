import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface WeatherData {
  name: string;
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; humidity: number; feels_like: number };
  wind: { speed: number };
  visibility: number;
  sys: { sunrise: number; sunset: number };
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
  searchHistory: WeatherData[]; //store result
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: "",
  searchHistory: [], 
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // clear history
    clearHistory: (state) => {
      state.searchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        // save
        const alreadyExists = state.searchHistory.find(
          (item) =>
            item.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (!alreadyExists) {
          state.searchHistory.unshift(action.payload);
          if (state.searchHistory.length > 5) {
            state.searchHistory.pop(); // optional limit
          }
        }
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = "City not found.";
      });
  },
});

export const { clearHistory } = weatherSlice.actions;

export default weatherSlice.reducer;

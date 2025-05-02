import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return { data: response.data, city }; 
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: '',
    searchHistory: [] as string[], 
  },
  reducers: {
    clearHistory(state) {
      state.searchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;

        const city = action.payload.city.trim().toLowerCase();
        if (!state.searchHistory.includes(city)) {
          state.searchHistory.push(city); // ✅ Save unique search
        }
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = 'City not found or API error';
      });
  },
});

export const { clearHistory } = weatherSlice.actions;
export default weatherSlice.reducer;

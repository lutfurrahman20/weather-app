export interface WeatherData {
    name: string;
    weather: { main: string; description: string; icon: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
    sys : { sunrise: number; sunset: number };
  }
  
import type {
  CurrentWeatherResponse,
  ForecastResponse,
} from "../types/weather";

const API_KEY = "c9a0ca46550648b29ce125849232709";
const BASE_URL = "https://api.weatherapi.com/v1";

export class WeatherService {
  static async getCurrentWeather(
    city: string
  ): Promise<CurrentWeatherResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=vi`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching current weather:", error);
      throw error;
    }
  }

  static async getHourlyForecast(city: string): Promise<ForecastResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching hourly forecast:", error);
      throw error;
    }
  }

  static async getDailyForecast(
    city: string,
    days: number = 5
  ): Promise<ForecastResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no&lang=vi`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching daily forecast:", error);
      throw error;
    }
  }
}

import { useState, useEffect } from "react";
import { WeatherService } from "./services/weatherService";
import type {
  CurrentWeatherResponse,
  ForecastResponse,
  Hour,
} from "./types/weather";

function App() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [city, setCity] = useState("Hanoi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (cityName: string) => {
    setLoading(true);
    setError(null);
    try {
      const [currentData, forecastData] = await Promise.all([
        WeatherService.getCurrentWeather(cityName),
        WeatherService.getHourlyForecast(cityName),
      ]);
      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city.trim());
    }
  };

  const getHourlyForecast = (): Hour[] => {
    if (!forecast) return [];
    const currentHour = new Date().getHours();
    const today = forecast.forecast.forecastday[0];
    return today.hour.filter((_, index) => index >= currentHour).slice(0, 6);
  };

  const formatTime = (timeString: string): string => {
    const hour = new Date(timeString).getHours();
    return hour === new Date().getHours()
      ? "Now"
      : `${hour.toString().padStart(2, "0")}:00`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <div className="text-white text-xl">Loading weather data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-4">
      <div className="max-w-md mx-auto bg-[#7faed1] backdrop-blur-md rounded-3xl p-6 text-white shadow-2xl">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for a city..."
              className="w-full bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 rounded-xl p-2 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 rounded-2xl border border-red-500/30">
            <p className="text-red-100">{error}</p>
          </div>
        )}

        {currentWeather && (
          <>
            {/* Current Weather Section */}
            <div className="text-center mb-8 flex items-center justify-between">
              <div className="flex gap-2 mb-4">
                <div>
                  <div className="text-6xl font-light">
                    {Math.round(currentWeather.current.temp_c)}°
                  </div>
                  <div className="text-xl opacity-80">
                    {currentWeather.current.condition.text}
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={`https:${currentWeather.current.condition.icon}`}
                  alt={currentWeather.current.condition.text}
                  className="w-20 h-20 mr-4"
                />
              </div>
            </div>

            {/* Humidity and Wind Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  <span className="text-sm opacity-80 text-center">
                    Humidity
                  </span>
                </div>
                <div className="text-2xl font-semibold text-center">
                  {currentWeather.current.humidity}%
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 11H7a2 2 0 01-2-2V7a2 2 0 012-2h2m4 4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0V4a1 1 0 011-1h2a1 1 0 011 1v1M9 11v2a2 2 0 002 2h2a2 2 0 002-2v-2M9 11h6"
                      />
                    </svg>
                    <span className="text-sm opacity-80 text-center">Wind</span>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-center">
                  {Math.round(currentWeather.current.wind_kph)} km/h
                </div>
              </div>
            </div>

            {/* Hourly Forecast Section */}
            {forecast && (
              <div>
                <div className="bg-white backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex flex-col space-x-4 overflow-x-auto">
                    <div className="text-sm opacity-80 mb-2 text-black font-bold px-6">
                      Now
                    </div>
                    <div className="flex">
                      {getHourlyForecast().map((hour, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 text-center min-w-[80px] text-black"
                        >
                          <img
                            src={`https:${hour.condition.icon}`}
                            alt={hour.condition.text}
                            className="w-8 h-8 mx-auto mb-2"
                          />
                          <div className="text-lg font-semibold">
                            {Math.round(hour.temp_c)}°
                          </div>
                          <div className="text-sm opacity-80 mb-2 text-black">
                            {formatTime(hour.time)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

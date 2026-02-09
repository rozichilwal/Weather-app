import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // OpenWeatherMap API key
  // DEMO KEY (for testing) - Get your own free key at: https://openweathermap.org/api
  // See API_KEY_SETUP.md for detailed instructions
  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
        } else {
          throw new Error('Failed to fetch weather data. Please try again later.');
        }
      }

      const data = await response.json();
      setWeather(data);
      setCity(''); // Clear input after successful search
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">🌤️ Weather App</h1>
          <p className="app-subtitle">Get real-time weather information for any city</p>
        </header>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={fetchWeather}
          loading={loading}
        />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {weather && !loading && !error && <WeatherCard weather={weather} />}

        {!weather && !loading && !error && (
          <div className="welcome-message">
            <p className="welcome-text">
              👋 Welcome! Enter a city name above to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

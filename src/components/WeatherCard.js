import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
    const { name, main, weather: weatherDetails, wind, sys } = weather;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@4x.png`;

    return (
        <div className="weather-card">
            <div className="weather-header">
                <h2 className="city-name">
                    {name}, {sys.country}
                </h2>
                <p className="weather-description">{weatherDetails[0].description}</p>
            </div>

            <div className="weather-main">
                <img
                    src={iconUrl}
                    alt={weatherDetails[0].description}
                    className="weather-icon"
                />
                <div className="temperature">
                    {Math.round(main.temp)}°C
                </div>
            </div>

            <div className="weather-details">
                <div className="detail-item">
                    <div className="detail-label">Feels Like</div>
                    <div className="detail-value">{Math.round(main.feels_like)}°C</div>
                </div>

                <div className="detail-item">
                    <div className="detail-label">Humidity</div>
                    <div className="detail-value">{main.humidity}%</div>
                </div>

                <div className="detail-item">
                    <div className="detail-label">Wind Speed</div>
                    <div className="detail-value">{wind.speed} m/s</div>
                </div>

                <div className="detail-item">
                    <div className="detail-label">Pressure</div>
                    <div className="detail-value">{main.pressure} hPa</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;

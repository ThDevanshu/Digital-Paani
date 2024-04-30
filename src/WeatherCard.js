import React from 'react';
import './WeatherCard.css'; 

const WeatherCard = ({ data }) => {
  const { name, main, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="center-text">
        <strong>Temperature:</strong> {main.temp}°C
      </div>
      <div className="center-text">
        <strong>Humidity:</strong> {main.humidity}%
      </div>
      <div className="center-text">
        <strong>Wind Speed:</strong> {wind.speed} m/s
      </div>
    </div>
  );
};

export default WeatherCard;

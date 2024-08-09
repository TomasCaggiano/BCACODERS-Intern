import React from 'react';

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {weather.temperature_2m}°C</p>
      <p>Weather Code: {weather.weathercode}</p>
    </div>
  );
}

export default WeatherDisplay;

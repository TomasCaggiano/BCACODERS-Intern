import React, { useState, useEffect } from 'react';
import CityInput from './components/CityInput.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      // Primero, obtén las coordenadas de la ciudad usando OpenCage
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=6c8abfe7f482424498df12e085775b22`)
        .then(response => response.json())
        .then(data => {
          const results = data.results;
          if (results.length > 0) {
            const { lat, lng } = results[0].geometry;
            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
          } else {
            throw new Error('No results found for the specified city.');
          }
        })
        .then(response => response.json())
        .then(data => {
          setWeather(data.current_weather);
          setError(null);
        })
        .catch(error => {
          setError(error.message);
          setWeather(null);
        });
    }
  }, [city]);

  return (
    <div className="App">
      <CityInput setCity={setCity} />
      {error && <div className="error">{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;

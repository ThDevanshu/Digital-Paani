import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import axios from 'axios'; 
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const apiKey = '3bf6ad40f66223279881a6767ede1cf0';
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(apiUrl);
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
    
    <div className="app-container">
    <h1>
      Weather Cast
    </h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
    </>
  );
};

export default App;

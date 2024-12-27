// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from 'react-router-dom';
import WeatherSlider from './components/WeatherSlider';
import { getWeatherByCity, getWeatherForMultipleCities } from './api/OpenWeather';

const App = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const initialCities = ["Madrid", "London", "Paris", "Barcelona", "Liverpool", "Caracas", "Lucerna", "Kiew", "Malta", "Moscow"];
    
    
  }, [])
  

  return (
    <div className='app'>
      <header>
        <h1>Aplicación del Tiempo</h1>
      </header>
      <main>
        <SearchBar />
        <WeatherSlider cities={cities} />
        <Routes>
          <Route path="/city/:cityName" element={{/* <WeatherDetails /> */}} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

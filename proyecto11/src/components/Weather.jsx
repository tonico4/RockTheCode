import React from "react";
import "./Weather.css";

const Weather = ({ city, temperature, humidity, wind }) => {
  return (
    <div className='weather'>
      <h2>{city}</h2>
      <p className='temp'>{temperature} °C</p>
      <p className='current-weather'>{currentWeather}</p>
      <p className='humidity'>{humidity}% hum</p>
      <p className='wind'>{wind} m/s</p>
    </div>
  );
};

export default Weather;

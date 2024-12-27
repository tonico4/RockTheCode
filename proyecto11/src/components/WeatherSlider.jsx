import React from "react";
import Slider from "react-slick";
import Weather from './Weather';

const WeatherSlider = ({ cities, onCitySelect}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <div className='city-slider'>
      <Slider {...settings}>
        {cities && cities.map((city, index) => (
          <Weather key={index} city={city.name} temperature={city.temperature} humidity={city.humidity} wind={city.wind} onClick={() => onCitySelect}/>
        ))}
      </Slider>
    </div>
  );
};

export default WeatherSlider;

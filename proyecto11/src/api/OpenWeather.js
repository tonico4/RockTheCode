const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos del clima");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("No se ha podido conectar con la API");
  }
};

export const getWeatherForMultipleCities = async (cityNames) => {
  try {
    const cityWeatherData = await Promise.all(
      cityNames.map(cityName => getWeatherByCity(cityName))
    );
    return cityWeatherData;
  } catch (error) {
    console.error('Error al obtener el clima de múltiples ciudades:', error);
    throw error;
  }
};
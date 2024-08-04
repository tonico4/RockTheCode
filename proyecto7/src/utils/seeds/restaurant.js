require("dotenv").config();
const mongoose = require("mongoose");
const { connectDB } = require("../../config/mongo");
const Restaurant = require("../../api/models/restaurant");

const restaurants = [
  {
    name: "Restaurante Chino Dragon",
    address: "Calle Falsa 123, Ciudad, País",
    phone: 123456789,
    foodStyle: "chino",
  },
  {
    name: "Tapas Españolas",
    address: "Avenida Principal 456, Ciudad, País",
    phone: 987654321,
    foodStyle: "español",
  },
  {
    name: "Sabores Tailandeses",
    address: "Plaza Central 789, Ciudad, País",
    phone: 456789123,
    foodStyle: "tailandés",
  },
  {
    name: "Diner Americano",
    address: "Boulevard Secundario 321, Ciudad, País",
    phone: 321654987,
    foodStyle: "americano",
  },
  {
    name: "Taverna Griega",
    address: "Calle de la Playa 654, Ciudad, País",
    phone: 654321987,
    foodStyle: "griego",
  },
  {
    name: "Palacio Chino",
    address: "Calle del Sol 321, Ciudad, País",
    phone: 123987654,
    foodStyle: "chino",
  },
  {
    name: "Bodega Española",
    address: "Avenida de la Luna 789, Ciudad, País",
    phone: 789123456,
    foodStyle: "español",
  },
  {
    name: "Thai Fusion",
    address: "Plaza de las Flores 456, Ciudad, País",
    phone: 654789123,
    foodStyle: "tailandés",
  },
  {
    name: "Grill Americano",
    address: "Boulevard del Parque 123, Ciudad, País",
    phone: 321987654,
    foodStyle: "americano",
  },
  {
    name: "Delicias Griegas",
    address: "Calle del Mar 789, Ciudad, País",
    phone: 987321654,
    foodStyle: "griego",
  },
];
const launchSeed = async () => {
  try {
    await connectDB();
    await Restaurant.collection.drop();
    console.log("Colección eliminada");
    await Restaurant.insertMany(restaurants);
    console.log("Restaurantes insertados correctamente");
    mongoose.disconnect();
    return console.log("Desconectado con éxito");
  } catch (error) {
    return console.log(
      "No se han podido insertar correctamente los restaurantes.",
      error
    );
  }
};

launchSeed();

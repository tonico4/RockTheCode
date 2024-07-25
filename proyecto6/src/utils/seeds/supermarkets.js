require("dotenv").config();
const SuperMarket = require('../../api/models/supermarket');
const { connectDB, disconnectDB } = require('../../config/mongodb');

const voidSupermarkets = [
  { name: "Caprabo", address: "Calle Falsa 123", products: [] },
  { name: "Opencor", address: "Avenida Siempre Viva 456", products: [] },
  { name: "Pryca", address: "Plaza Central 789", products: [] }
];

// Semilla
const launchSeed = async () => {
  try {
    connectDB();
    await SuperMarket.collection.drop();
    console.log("Colección eliminada");
    await SuperMarket.insertMany(voidSupermarkets);
    console.log("Supermercados insertados con éxito! 🟢");
    disconnectDB();
  } catch (error) {
    console.log("No se han podido insertar los supermercados. 🔴");
  }
}

launchSeed();
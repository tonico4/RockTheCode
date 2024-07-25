require("dotenv").config();
const Product = require("../../api/models/product");
const { connectDB, disconnectDB } = require('../../config/mongodb');

const products = [
  { name: "Paracetamol", price: 2.5, category: "Droguería" },
  { name: "Salchichón", price: 5.0, category: "Charcutería" },
  { name: "Pan Integral", price: 1.5, category: "Panadería" },
  { name: "Salmón", price: 10.0, category: "Pescados" },
  { name: "Tomates", price: 3.0, category: "Verduras" },
  { name: "Ibuprofeno", price: 3.0, category: "Droguería" },
  { name: "Queso", price: 4.5, category: "Charcutería" },
  { name: "Baguette", price: 1.0, category: "Panadería" },
  { name: "Atún", price: 8.0, category: "Pescados" },
  { name: "Lechuga", price: 2.0, category: "Verduras" },
];

const launchSeed = async () => {
  try {
    connectDB();
    await Product.collection.drop();
    console.log("Colección eliminada");
    await Product.insertMany(products);
    console.log("Productos insertados con éxito! 🟢");
    disconnectDB();
  } catch (error) {
    console.log("No se han podido insertar los productos. 🔴");
  }
};

launchSeed();
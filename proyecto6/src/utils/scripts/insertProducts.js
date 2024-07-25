require("dotenv").config();
const Product = require('../../api/models/product');
const SuperMarket = require('../../api/models/supermarket');
const { connectDB, disconnectDB } = require('../../config/mongodb');

/**
 * Insertar productos de la base de datos en los supermercados aleatoriamente
 */

let supermarkets = [];
let products = [];

const insertProductsInSupermarket = () => {
  for (let index = 0; index < 30; index++) {
    const randomProductIndex = Math.floor(Math.random() * products.length);
    const randomMarketIndex = Math.floor(Math.random() * supermarkets.length);
    
    supermarkets[randomMarketIndex].products.push(products[randomProductIndex]);
  }
}

const getSupermarkets = async () => {
  try {
    supermarkets = await SuperMarket.find();
  } catch (error) {
    console.log("No se han podido obtener los supermercados. 🔴");
  }
}

const getProducts = async () => {
  try {
    products = await Product.find();
  } catch (error) {
    console.log("No se han podido obtener los productos. 🔴");
  }
}

const putSupermarkets = async() => {
  try {
    await SuperMarket.collection.drop();
    console.log("Colección eliminada");
    await SuperMarket.insertMany(supermarkets);
    console.log("Supermercados insertados con éxito! 🟢");
  } catch (error) {
    console.log("Error al actualizar supermercados.");
  }
}

const launchScript = async () => {
  try {
    await connectDB();
    await getSupermarkets();
    await getProducts();
    insertProductsInSupermarket();
    await putSupermarkets();
    await disconnectDB();
  } catch (error) {
    console.log("Error en la función");
  }
}

launchScript();
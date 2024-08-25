require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado con la base de datos 🟢");
  } catch (error) {
    console.log("Error al conectar con la base de datos 🔴");
  }
}

module.exports = { connectDB };
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Conexión a la base de datos exitosa. 🟢");
    
  } catch (error) {
    console.log("No se ha podido conectar a la base de datos. 🔴");
  }
}

module.exports = { connectDB };
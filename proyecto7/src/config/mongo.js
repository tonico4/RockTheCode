const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conexión con la base de datos exitosa 🟢");
  } catch (error) {
    console.log("No se ha podido conectar con la base de datos. 🔴");
  }
}

module.exports = { connectDB };
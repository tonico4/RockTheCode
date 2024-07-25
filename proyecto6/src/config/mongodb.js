const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado a la base de datos. 🟢");
  } catch (error) {
    console.log("No se ha podido conectar a la base de datos");
    console.log(error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Base de datos desconectada.");
  } catch (error) {
    console.log("No se ha podido desconectar a la base de datos");
  }
}

module.exports = { connectDB, disconnectDB };

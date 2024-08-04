require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { connectDB } = require("../../config/mongo");
const User = require("../../api/models/user");

const users = [
  {
    username: "Juan",
    email: "juan.perez@example.com",
    password: bcrypt.hashSync("password123", 10),
    role: "client",
  },
  {
    username: "María",
    email: "maria.lopez@example.com",
    password: bcrypt.hashSync("maria2024", 10),
    role: "client",
  },
  {
    username: "Carlos",
    email: "carlos.rodriguez@example.com",
    password: bcrypt.hashSync("carlosSecure!", 10),
    role: "client",
  },
  {
    username: "Laura",
    email: "laura.gomez@example.com",
    password: bcrypt.hashSync("lauraPass#789", 10),
    role: "client",
  },
  {
    username: "Pedro",
    email: "pedro.martinez@example.com",
    password: bcrypt.hashSync("pedroKey$45", 10),
    role: "client",
  },
  {
    username: "Toni",
    email: "toni@email.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin",
  }
];

const launchSeed = async () => {
  try {
    await connectDB();
    await User.collection.drop();
    console.log("Colección eliminada");
    await User.insertMany(users);
    console.log("Usuarios insertados correctamente");
    mongoose.disconnect();
    return console.log("Desconectado con éxito");
  } catch (error) {
    return console.log("No se han podido insertar correctamente los usuarios.", error);
  }
};

launchSeed();

module.exports = { users };
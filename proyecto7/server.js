require("dotenv").config();
const express = require("express");
const { connectDB } = require('./src/config/mongo');
const userRoutes = require('./src/api/routes/user');
const restaurantRoutes = require('./src/api/routes/restaurant');
const reservationRoutes = require('./src/api/routes/reservation');

const server = express();

connectDB();

server.use(express.json());

server.use("/api/v1/users", userRoutes);
server.use("/api/v1/restaurants", restaurantRoutes);
server.use("/api/v1/reservations", reservationRoutes);

server.use("*", (req, res, next) => {
  console.log("Route Not Found!");
  return res.status(404).json("Route Not Found!");
});

server.listen(process.env.PORT, () => console.log(`Servidor iniciado en http://localhost:${process.env.PORT}`));
require("dotenv").config();
const express = require("express");
const cloudinary = require("cloudinary").v2;
const { connectDB } = require('./src/config/db');
const platformRoutes = require('./src/api/routes/platform');
const videoGameRoutes = require('./src/api/routes/videogame');

const server = express();

server.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

connectDB();

server.use("/api/v1/platforms", platformRoutes);
server.use("/api/v1/videogames", videoGameRoutes);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

server.listen(process.env.PORT, () =>
  console.log(`Servidor conectado en http:localhost:${process.env.PORT}`)
);

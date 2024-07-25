require("dotenv").config();
const express = require("express");
const superMarketRoutes = require('./src/api/routes/supermarket');
const productRoutes = require('./src/api/routes/product');
const { connectDB } = require('./src/config/mongodb');

const server = express();

connectDB();

server.use(express.json());

server.use("/api/v1/supermercados", superMarketRoutes);
server.use("/api/v1/productos", productRoutes);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${process.env.PORT}`);
})
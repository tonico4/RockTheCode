const express = require("express");
const { createRestaurant, getRestaurants, getRestaurantById, getRestaurantsByAddress, getRestaurantsByName, getRestaurantsByFoodStyle, updateRestaurant, deleteRestaurant } = require('../controllers/restaurant');
const { isAdmin } = require('../../middlewares/isAuth');

const restaurantRoutes = express.Router();

restaurantRoutes.post("/", [isAdmin], createRestaurant);
restaurantRoutes.get("/", getRestaurants);
restaurantRoutes.get("/:id", getRestaurantById);
restaurantRoutes.get("/:name", getRestaurantsByName);
restaurantRoutes.get("/:address", getRestaurantsByAddress);
restaurantRoutes.get("/:foodStyle", getRestaurantsByFoodStyle);
restaurantRoutes.put("/:id", [isAdmin], updateRestaurant);
restaurantRoutes.delete("/:id", [isAdmin], deleteRestaurant);

module.exports = restaurantRoutes;
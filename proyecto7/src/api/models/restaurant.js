const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  phone: {type: Number, required: true},
  foodStyle: {type: String, required: true, enum: ["chino", "español", "tailandés", "americano", "griego"]}
},
{
  timestamps: true,
  collection: "restaurants"
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema, "restaurants");
module.exports = Restaurant;
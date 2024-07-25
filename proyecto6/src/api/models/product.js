const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Droguería", "Charcutería", "Panadería", "Pescados", "Verduras"],
    required: true,
  },
},
{
  timestamps: true,
  collection: "products"
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;

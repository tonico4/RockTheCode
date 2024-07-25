const { getProducts, createProduct, getProductsByName, getProductById, getProductsByCategory } = require('../controllers/product');

const productRoutes = require("express").Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.get("/:name", getProductsByName);
productRoutes.get("/:category", getProductsByCategory);
productRoutes.put("/:id", getProducts);
productRoutes.delete("/:id", getProducts);

module.exports = productRoutes;
const Product = require("../models/product");

// CREATE
const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    await newProduct.save();
    return res.status(201).json("Creado con éxito ✅");
  } catch (error) {
    return res.status(400).json("Error al crear producto! ❌");
  }
};

// READ
const getProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json("Error al obtener productos! ❌");
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json("Producto no encontrado! ❌");
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json("Error al obtener producto! ❌");
  }
};

const getProductsByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const products = await Product.find({ name: name });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json("Error al obtener productos! ❌");
  }
};

const getProductsByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category: category });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json("Error al obtener productos! ❌");
  }
};

// UPDATE
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = Product.findById(id);

    if (!product) {
      return res.status(404).json("Producto no encontrado!");
    }

    const newData = {
      name: req.body.name || product.name,
      price: req.body.price || product.price,
      category: req.body.category || product.category
    };

    newData._id = id;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      newData,
      { new: true }
    );
    return res.status(200).json("El producto ha sido actualizado ✅", updatedProduct);
  } catch (error) {
    return res.status(400).json("Error al actualizar producto! ❌");
  }
};

// DELETE
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json("Producto no encontrado! ❌");
    }
    return res.status(200).json("Producto eliminado con éxito! ✅");
  } catch (error) {
    return res.status(400).json("Error al eliminar producto! ❌");
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductsByName,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
};

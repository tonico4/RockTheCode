const SuperMarket = require("../models/supermarket");

// CREATE
const createSuperMarket = async (req, res, next) => {
  try {
    const newSuperMarket = new SuperMarket({
      name: req.body.name,
      address: req.body.address,
      products: req.body.products,
    });
    await newSuperMarket.save();
    return res.status(201).json("Creado con éxito ✅");
  } catch (error) {
    return res.status(400).json("Error al crear Supermercado! ❌");
  }
};

// READ
const getSuperMarkets = async (req, res, next) => {
  try {
    const allSupermarkets = await SuperMarket.find().populate("products");
    return res.status(200).json(allSupermarkets);
  } catch (error) {
    return res.status(400).json("Error al obtener Supermercados! ❌");
  }
};

const getSuperMarketById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const supermarket = await SuperMarket.findById(id).populate("products");

    if (!supermarket) {
      return res.status(404).json("Supermercado no encontrado! ❌");
    }

    return res.status(200).json(supermarket);
  } catch (error) {
    return res.status(400).json("Error al obtener Supermercado! ❌");
  }
};

const getSuperMarketsByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const supermarkets = await SuperMarket.find({ name: name }).populate(
      "products"
    );

    return res.status(200).json(supermarkets);
  } catch (error) {
    return res.status(400).json("Error al obtener Supermercados! ❌");
  }
};

// UPDATE
const updateSuperMarket = async (req, res, next) => {
  try {
    const { id } = req.params;

    const supermarket = await SuperMarket.findById(id);

    if (!supermarket) {
      return res.status(404).json("Supermercado no encontrado!");
    }

    const newData = new SuperMarket({
      name: req.body.name || supermarket.name,
      address: req.body.address || supermarket.address,
      products: req.body.products || supermarket.products,
    });

    newData._id = id;

    const updatedSuperMarket = await SuperMarket.findByIdAndUpdate(
      id,
      newData,
      { new: true }
    );

    return res.status(200).json("El supermercado ha sido actualizado ✅", updatedSuperMarket);
  } catch (error) {
    return res.status(400).json("Error al actualizar Supermercado! ❌");
  }
};

// DELETE
const deleteSuperMarket = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedSuperMarket = await SuperMarket.findByIdAndDelete(id);

    if (!deletedSuperMarket) {
      return res.status(404).json("Supermercado no encontrado! ❌");
    }

    return res.status(200).json("Supermercado eliminado con éxito! ✅");
  } catch (error) {
    return res.status(400).json("Error al eliminar Supermercado! ❌");
  }
};

module.exports = {
  createSuperMarket,
  getSuperMarkets,
  getSuperMarketById,
  getSuperMarketsByName,
  updateSuperMarket,
  deleteSuperMarket,
};

const Restaurant = require("../models/restaurant");

const createRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      foodStyle: req.body.foodStyle,
    });

    const restaurant = await Restaurant.findOne(newRestaurant);

    if (!restaurant) {
      await newRestaurant.save();
      return res.status(201).json("Restaurante creado.");
    } else {
      return res.status(400).json("Este restaurante ya existe");
    }
  } catch (error) {
    return res.status(400).json("Error al crear el restaurante.");
  }
};

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();

    return res.status(200).json(restaurants);
  } catch (error) {
    return res.status(404).json("No se ha encontrado ningún restaurante.");
  }
};

const getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json("No se ha encontrado el restaurante.");
    } else {
      return res.status(200).json(restaurant);
    }
  } catch (error) {
    return res.status(400).json("Error al buscar el restaurante.");
  }
};

const getRestaurantsByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const restaurants = Restaurant.find({name: name});

    if (!restaurants) {
      return res.status(404).json("No se han encontrado los restaurantes.");
    } else {
      return res.status(200).json(restaurants);
    }
  } catch (error) {
    return res.status(400).json("Error al obtener restaurantes.");
  }
};

const getRestaurantsByAddress = async (req, res, next) => {
  try {
    const { address } = req.params;

    const restaurants = Restaurant.find({address: address});

    if (!restaurants) {
      return res.status(404).json("No se han encontrado los restaurantes.");
    } else {
      return res.status(200).json(restaurants);
    }
  } catch (error) {
    return res.status(400).json("Error al obtener restaurantes.");
  }
};

const getRestaurantsByFoodStyle = async (req, res, next) => {
  try {
    const { foodStyle } = req.params;

    const restaurants = Restaurant.find({foodStyle: foodStyle});

    if (!restaurants) {
      return res.status(404).json("No se han encontrado los restaurantes.");
    } else {
      return res.status(200).json(restaurants);
    }
  } catch (error) {
    return res.status(400).json("Error al obtener restaurantes.");
  }
};

const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json("El restaurante no existe!");
    }

    const newRestaurant = new Restaurant({
      name: req.body.name || restaurant.name,
      address: req.body.address || restaurant.address,
      phone: req.body.phone || restaurant.phone,
      foodStyle: req.body.foodStyle || restaurant.foodStyle
    });

    newRestaurant._id = id;

    await Restaurant.findByIdAndUpdate(id, newRestaurant, {
      new: true,
    });

    return res.status(200).json("Restaurante actualizado.");
  } catch (error) {
    return res.status(400).json("Error al actualizar restaurante.");
  }
};

const deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByIdAndDelete(id);

    if (!restaurant) {
      return res.status(404).json("No se ha encontrado el restaurante.");
    }
    return res.status(200).json("Restaurante eliminado.");
  } catch (error) {
    return res.status(400).json("No se ha podido eliminar el restaurante.");
  }
};

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  getRestaurantsByName,
  getRestaurantsByAddress,
  getRestaurantsByFoodStyle,
  updateRestaurant,
  deleteRestaurant,
};

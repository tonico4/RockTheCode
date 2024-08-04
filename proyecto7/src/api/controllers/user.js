const { createSign } = require("../../config/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const newUser = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: "client", // Forzamos que el nuevo usuario no sea admin
    });

    const user = await User.findOne({ username: req.body.username });

    if (user) {
      return res.status(400).json("Este usuario ya existe!");
    } else {
      await newUser.save();
      return res.status(201).json("Usuario creado con éxito.");
    }
  } catch (error) {
    return res.status(400).json("No se ha podido crear el usuario");
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(400)
        .json("El nombre de usuario o la contraseña son incorrectos.");
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = createSign(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res
        .status(400)
        .json("El nombre de usuario o la contraseña son incorrectos.");
    }
  } catch (error) {
    return res.status(400).json("Error de inicio de sesión.");
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json("No existen usuarios.");
    } else {
      return res.status(200).json(users);
    }
  } catch (error) {
    return res.status(400).json("Error al obtener los usuarios.");
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json("No se ha encontrado el usuario.");
    } 

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("No se ha podido obtener el usuario.");
  }
};

const getUsersByName = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.find({ username: username });

    if (!user) {
      return res.status(404).json("No se han encontrado el usuario.");
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("No se han podido obtener los usuarios.");
  }
};

const getUsersByRole = async (req, res, next) => {
  try {
    const { role } = req.params;

    const users = await User.find({ role: role });

    if (!users) {
      return res.status(404).json("No se han encontrado usuarios.");
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("No se han podido obtener los usuarios.");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Datos del usuario logueado
    const currentUser = req.user;

    if (currentUser.role !== "admin" || currentUser._id.toString() !== id) {
      return res
        .status(403)
        .json("No tienes permiso para actualizar el usuario.");
    };

    const updateUser = new User({
      username: req.body.username || currentUser.username,
      email: req.body.email || currentUser.email,
      role: currentUser.role === "admin" ? req.body.role || currentUser.role : "client" // Si es admin puede actualizar el rol
    });

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    updateUser._id = id;

    await User.findByIdAndUpdate(id, updateUser, { new: true });

    return res.status(200).json("Usuario actualizado.");
  } catch (error) {
    return res.status(400).json("Error al actualizar usuario.");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUser = req.user;

    if (currentUser.role !== "admin" || currentUser._id.toString() !== id) {
      return res
        .status(403)
        .json("No tienes permiso para eliminar el usuario.");
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json("Usuario eliminado.");
  } catch (error) {
    return res.status(400).json("No se ha podido eliminar el usuario.");
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  getUsersByName,
  getUsersByRole,
  updateUser,
  deleteUser,
};

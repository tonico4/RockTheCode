const { createSign } = require('../../utils/jwt');
const Assistant = require('../models/Assistant');
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const user = await Assistant.findOne({email: req.body.email});

    if(user) {
      return res.status(400).json("El email ya está registrado.");
    }

    const newAssistant = new Assistant({
      username: req.body.username,
      secondName: req.body.secondName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      avatar: req.body.avatar
    });

    await newAssistant.save();

    return res.status(201).json("Usuario creado");
  } catch (error) {
    return res.status(400).json("Error al crear usuario.");
  }
}

const login = async (req, res, next) => {
  try {
    const user = await Assistant.findOne({email: req.body.email});

    if (!user) {
      return res.status(404).json("No se ha encontrado al asistente.");
    }

    // Comparar contraseñas y crear token
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = createSign(user._id);
      return res.status(200).json({user, token});
    } else {
      return res.status(400).json("Email o contraseña incorrectos.");
    }
  } catch (error) {
    return res.status(400).json("Error de inicio de sesión.", error);
  }
}

// Obtener todos los asistentes y admins
const getAllAssistants = async (req, res, next) => {
  try {
    const allAssistants = await Assistant.find();

    if (allAssistants.length === 0) {
      return res.status(404).json("No existen usuarios.");
    }

    return res.status(200).json(allAssistants);
  } catch (error) {
    return res.status(500).json("Error al obtener usuarios.");
  }
}

const updateAssistantData = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const id = currentUser._id;

    const newData = {
      username: req.body.username || currentUser.username,
      secondName: req.body.secondName || currentUser.secondName,
      email: req.body.email || currentUser.email,
      avatar: req.body.avatar || currentUser.avatar
    };

    const user = await Assistant.findByIdAndUpdate(id, newData, { new: true });

    if (!user) {
      return res.status(404).json("No se ha encontrado el usuario.");
    }

    return res.status(200).json("Datos actualizados!");
  } catch (error) {
    return res.status(400).json("Error al actualizar usuario.");
  }
}

const updatePassword = async (req, res, next) => {
  try {
    const id = req.user._id;

    const newPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await Assistant.findByIdAndUpdate(id, {password: newPassword});

    if (!user) {
      return res.status(404).json("No existe el asistente.");
    }

    return res.status(200).json("Contraseña actualizada!");
  } catch (error) {
    return res.status(400).json("Error, no se ha podido actualizar la contraseña.");
  }
}

const deleteAssistant = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const id = currentUser._id;
    req.params.id = id;

    const user = await Assistant.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json("No existe el asistente.");
    }

    return res.status(200).json("Asistente eliminado.");
  } catch (error) {
    return res.status(400).json("Error al eliminar.");
  }
}

module.exports = {
  register,
  login,
  getAllAssistants,
  updateAssistantData,
  updatePassword,
  deleteAssistant
};
const { deleteFile } = require('../../utils/file');
const Platform = require('../models/platform')

const createPlatform = async (req, res, next) => {
  try {
    const newPlatform = new Platform({
      name: req.body.name,
      image: req.body.image
    });

    if (req.file) {
      newPlatform.image = req.file.path;
    }

    const platform = await Platform.findOne({ name: newPlatform.name });

    if (platform) {
      return res.status(400).json("Esta plataforma ya existe!");
    }

    newPlatform.save();

    return res.status(201).json("Plataforma creada con éxito.");
  } catch (error) {
    return res.status(400).json("No se ha podido crear la plataforma.");
  }
}

const getAllPlatforms = async (req, res, next) => {
  try {
    const platforms = await Platform.find();

    if (platforms.length === 0) {
      return res.status(404).json("No se han encontrado plataformas.");
    }

    return res.status(200).json(platforms);
  } catch (error) {
    return res.status(400).json("Error al obtener las plataformas.");
  }
}

const getPlatformByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const platform = await Platform.findOne({ name: name });

    if (!platform) {
      return res.status(404).json("La plataforma no existe.");
    }

    return res.status(200).json(platform);
  } catch (error) {
    return res.status(400).json("No se ha podido obtener la plataforma.");
  }
}

const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newData = {
      name: req.body.name,
      image: req.body.image
    };

    const platform = await Platform.findByIdAndUpdate(id, newData);

    if (!platform) {
      return res.status(404).json("No existe esta plataforma.");
    }

    return res.status(200).json("Plataforma actualizada!");
  } catch (error) {
    return res.status(400).json("Error al actualizar la plataforma.");
  }
}

const deletePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;

    const platform = await Platform.findByIdAndDelete(id);

    if (!platform) {
      return res.status(404).json("No existe esta plataforma.");
    }

    deleteFile(platform.image);

    return res.status(200).json("Plataforma eliminada.");
  } catch (error) {
    return res.status(400).json("Error al eliminar la plataforma.");
  }
}

const deleteallPlatforms = async (req, res, next) => {
  try {
    await Platform.deleteMany();

    return res.status(200).json("Todas las plataformas han sido eliminadas.");
  } catch (error) {
    return res.status(400).json("Error al eliminar las plataformas.");
  }
}

module.exports = {
  createPlatform,
  getAllPlatforms,
  getPlatformByName,
  updatePlatform,
  deletePlatform,
  deleteallPlatforms
};
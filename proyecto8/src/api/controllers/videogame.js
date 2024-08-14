const { deleteFile } = require('../../utils/file');
const VideoGame = require("../models/videogame");

const createVideoGame = async (req, res, next) => {
  try {
    const newVideoGame = new VideoGame({
      title: req.body.title,
      platform: req.body.platform,
      console: req.body.console,
      multiplayer: req.body.multiplayer,
      image: req.body.image
    });

    if (req.file) {
      newVideoGame.image = req.file.path;
    }

    const videogame = await VideoGame.findOne(newVideoGame);

    if (videogame) {
      return res.status(400).json("Este videojuego ya existe!");
    }

    await newVideoGame.save();

    return res.status(201).json("Videojuego creado con éxito!");
  } catch (error) {
    return res.status(400).json("Error al crear videojuego.");
  }
};

const getAllVideoGames = async (req, res, next) => {
  try {
    const videogames = await VideoGame.find();

    if (videogames.length === 0 ) {
      return res.status(404).json("No se han encontrado videojuegos.");
    }

    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(400).json("Error al obtener videojuegos.");
  }
};

const getVideoGameById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const videogame = await VideoGame.findById(id);

    if (!videogame) {
      return res.status(404).json("Este videojuego no existe.");
    }

    return res.status(200).json(videogame);
  } catch (error) {
    return res.status(400).json("Error al obtener el videojuego.");
  }
};

const getVideoGamesByPlatform = async (req, res, next) => {
  try {
    const { platform } = req.params;

    const videogames = await VideoGame.find({ platform: platform });

    if (videogames.length === 0) {
      return res.status(404).json("No se han encontrado videojuegos.");
    }

    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(400).json("Error al obtener los videojuegos.");
  }
};

const updateVideoGame = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newData = {
      title: req.body.title,
      platform: req.body.platform,
      console: req.body.console,
      multiplayer: req.body.multiplayer,
      image: req.body.image
    };

    const videogame = await VideoGame.findByIdAndUpdate(id, newData);

    if (!videogame) {
      return res.status(404).json("No se ha encontrado este videojuego.");
    }

    return res.status(200).json("Videojuego actualizado con éxito!");
  } catch (error) {
    return res.status(400).json("No se ha podido actualizar el videojuego.");
  }
};

const deleteVideoGame = async (req, res, next) => {
  try {
    const { id } = req.params;

    const videogame = await VideoGame.findByIdAndDelete(id);

    if(!videogame) {
      return res.status(404).json("No se ha encontrado el videojuego.");
    }

    deleteFile(videogame.image);

    return res.status(200).json("Videojuego eliminado!");
  } catch (error) {
    return res.status(400).json("Error al eliminar videojuego.")
  }
};

const deleteAllVideoGames = async (req, res, next) => {
  try {
    await VideoGame.deleteMany();

    return res.status(200).json("Todos los videojuegos han sido eliminados!");
  } catch (error) {
    return res.status(400).json("Error al eliminar los videojuegos.");
  }
};

module.exports = {
  createVideoGame,
  getAllVideoGames,
  getVideoGameById,
  getVideoGamesByPlatform,
  updateVideoGame,
  deleteVideoGame,
  deleteAllVideoGames,
};

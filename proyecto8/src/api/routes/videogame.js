const express = require('express');
const { createVideoGame, getAllVideoGames, getVideoGameById, getVideoGamesByPlatform, updateVideoGame, deleteVideoGame, deleteAllVideoGames } = require('../controllers/videogame');
const { uploadVideoGame } = require('../../middlewares/file');

const videoGameRoutes = express.Router();

videoGameRoutes.post("/", uploadVideoGame.single("image"), createVideoGame);
videoGameRoutes.get("/", getAllVideoGames);
videoGameRoutes.get("/:id", getVideoGameById);
videoGameRoutes.get("/:platform", getVideoGamesByPlatform);
videoGameRoutes.put("/:id", updateVideoGame);
videoGameRoutes.delete("/:id", deleteVideoGame);
videoGameRoutes.delete("/", deleteAllVideoGames);

module.exports = videoGameRoutes;
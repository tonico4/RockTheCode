const express = require('express');
const { createPlatform, getAllPlatforms, getPlatformByName, updatePlatform, deleteallPlatforms, deletePlatform } = require('../controllers/platform');
const { uploadPlatform } = require('../../middlewares/file');

const platformRoutes = express.Router();

platformRoutes.post("/", uploadPlatform.single("image"), createPlatform);
platformRoutes.get("/", getAllPlatforms);
platformRoutes.get("/:name", getPlatformByName);
platformRoutes.put("/:id", updatePlatform);
platformRoutes.delete("/:id", deletePlatform);
platformRoutes.delete("/", deleteallPlatforms);

module.exports = platformRoutes;
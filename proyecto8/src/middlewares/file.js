const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("cloudinary").v2;

const platformStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Platforms",
    allowedFormats: ["jpg", "png", "jpeg"]
  }
});

const videoGameStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "VideoGames",
    allowedFormats: ["jpg", "png", "jpeg"]
  }
});

const uploadPlatform = multer({ platformStorage });
const uploadVideoGame = multer({ videoGameStorage });

module.exports = {
  uploadPlatform,
  uploadVideoGame
};
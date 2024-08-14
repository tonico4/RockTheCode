require("dotenv").config();
const { default: mongoose } = require("mongoose");
const cloudinary = require("cloudinary").v2;
const Platform = require("../../api/models/platform");
const { connectDB } = require("../../config/db");
const { uploadPlatform } = require("../../middlewares/file");

const platforms = [
  {
    name: "Nintendo",
    image: "src/assets/nintendo.png",
  },
  {
    name: "PC",
    image: "src/assets/pc.png",
  },
  {
    name: "XBOX",
    image: "src/assets/Xbox.png",
  },
  {
    name: "PlayStation",
    image: "src/assets/ps.jpeg",
  },
];

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const launchSeed = async () => {
  try {
    await connectDB();
    await Platform.collection.drop();

    // Subimos la imagen a cloudinary y la url que nos devuelve se la asignamos a platform.image para que la guarde en mongodb
    for (let platform of platforms) {
      const resultUrl = cloudinary.uploader.upload(platform.image, () =>
        console.log("Imagen subida")
      );
      platform.image = (await resultUrl).secure_url;
    }

    await Platform.insertMany(platforms);
    console.log("Plataformas insertadas.");
    mongoose.disconnect();
  } catch (error) {
    console.log("No se ha podido lanzar la semilla.", error);
  }
};

launchSeed();

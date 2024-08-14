const mongoose = require("mongoose");

const videoGameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platform: { type: mongoose.Types.ObjectId, required: true },
    console: { type: String, required: true },
    multiplayer: { type: Boolean, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "videogames",
  }
);

const VideoGame = mongoose.model("Videogame", videoGameSchema, "videogames");

module.exports = VideoGame;

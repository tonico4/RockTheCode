const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["PC", "Nintendo", "XBOX", "PlayStation"],
      unique: true
    },
    image: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: "platforms",
  }
);

const Platform = mongoose.model("Platform", platformSchema, "platforms");

module.exports = Platform;
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, required: true, ref: "User"},
  restaurantId: {type: mongoose.Types.ObjectId, required: true, ref: "Restaurant"},
  date: {type: String, required: true},
  time: {type: String, required: true},
  numberOfPeople: {type: Number, required: true}
},
{
  timestamps: true,
  collection: "reservations"
});

const Reservation = mongoose.model("Reservation", reservationSchema, "reservations");
module.exports = Reservation;
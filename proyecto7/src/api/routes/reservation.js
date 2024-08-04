const express = require("express");
const { isAdmin, isAuth } = require('../../middlewares/isAuth');
const { createReservation, getReservations, getClientReservation, getReservationById, updateReservation, deleteReservation, deleteAllReservations } = require('../controllers/reservation');

const reservationRoutes = express.Router();

reservationRoutes.post("/", [isAuth], createReservation);
reservationRoutes.get("/", [isAdmin], getReservations);
reservationRoutes.get("/:userId", [isAuth], getClientReservation);
reservationRoutes.get("/:id", [isAuth], getReservationById);
reservationRoutes.put("/:id", [isAuth], updateReservation);
reservationRoutes.delete("/", [isAdmin], deleteAllReservations);
reservationRoutes.delete("/:id", [isAuth], deleteReservation);

module.exports = reservationRoutes;
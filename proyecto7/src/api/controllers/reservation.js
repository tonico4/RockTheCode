const Reservation = require("../models/reservation");

const createReservation = async (req, res, next) => {
  try {
    const currentUser = req.user;

    const newReservation = new Reservation({
      userId: currentUser._id,
      restaurantId: req.body.restaurantId,
      date: req.body.date,
      time: req.body.time,
      numberOfPeople: req.body.numberOfPeople
    });

    await newReservation.save();

    return res.status(200).json("Nueva reserva creada.");
  } catch (error) {
    return res.status(400).json("Error al crear la reserva.", error.message);
  }
};

const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find().populate("userId", "username email").populate("restaurantId", "name address");

    return res.status(200).json(reservations);
  } catch (error) {
    return res.status(400).json("Error al obtener las reservas.");
  }
};

const getClientReservation = async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    const reservation = await Reservation.find(userId._id).populate("userId", "username email").populate("restaurantId", "name address");

    console.log(reservation);
    

    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(400).json("Error al obtener la reserva.");
  }
};

const getReservationById = async (req, res, next) => {
  try {
    const { id } = req.body;

    const reservation = await Reservation.findById(id).populate("userId", "username email").populate("restaurantId", "name address");

    if (!reservation) {
      return res.status(404).json("No hay reserva.");
    }

    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(400).json("Error al obtener la reserva.");
  }
}

const updateReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res.status(404).json("No se ha encontrado la reserva!");
    }

    const newReservation = {
      userId: reservation.id,
      restaurantId: reservation.restaurantId,
      date: req.body.date || reservation.date,
      time: req.body.time || reservation.time,
      numberOfPeople: req.body.numberOfPeople || reservation.numberOfPeople
    };

    newReservation._id = id;
    
    await Reservation.findByIdAndUpdate(id, newReservation, { new: true });

    return res.status(200).json("Reserva actualizada");
  } catch (error) {
    return res.status(400).json("Error al actualizar la reserva.");
  }
}

const deleteReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).json("No existe reserva.");
    }

    return res.status(200).json("Reserva eliminada.");
  } catch (error) {
    return res.status(400).json("No se ha podido eliminar la reserva.");
  }
}

const deleteAllReservations = async (req, res, next) => {
  try {
    await Reservation.deleteMany();

    return res.status(200).json("Reservas eliminadas.");
  } catch (error) {
    return res.status(400).json("No se ha podido eliminar la reserva.");
  }
}

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  getClientReservation,
  updateReservation,
  deleteReservation,
  deleteAllReservations
};
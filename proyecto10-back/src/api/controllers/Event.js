// controllers/eventoController.js
const Event = require("../models/Event");

// Crear un nuevo evento
const createEvent = async (req, res, next) => {
  try {
    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      place: req.body.place,
    });

    await newEvent.save();

    return res.status(201).json(newEvent);
  } catch (error) {
    return res.status(400).json("Error al crear evento.");
  }
};

// Obtener todos los eventos
const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find().populate("assistants");

    if (events.length === 0) {
      return res.status(404).json("No hay eventos.");
    }

    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json("Error al obtener eventos.");
  }
};

// Obtener un evento por ID
const getEventById = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id).populate("assistants");

    if (!event) {
      return res.status(404).json("Evento no encontrado.");
    }

    return res.status(200).json(event);
  } catch (error) {
    return res.status(500).json("Error al obtener evento.");
  }
};

// Actualizar un evento
const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!event) {
      return res.status(404).json("Evento no encontrado.");
    }

    return res.status(200).json(event);
  } catch (error) {
    return res.status(400).json("Error al actualizar evento.");
  }
};

// Eliminar un evento
const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json("Evento no encontrado.");
    }
    return res.status(200).json("Evento eliminado.");
  } catch (error) {
    return res.status(500).json("Error al eliminar evento.");
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};

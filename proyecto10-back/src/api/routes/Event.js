const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/Event");
const { isAdmin } = require('../../middlewares/isAuth');

const eventsRouter = express.Router();

eventsRouter.post("/" ,createEvent);
eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id", getEventById);
eventsRouter.put("/:id", updateEvent);
eventsRouter.delete("/:id", isAdmin, deleteEvent);

module.exports = { eventsRouter };

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  date: {type: Date, required: true},
  place: {type: String, required: true},
  assistants: [{type: mongoose.Schema.Types.ObjectId, ref: "Assistant"}]
},
{
  timestamps: true,
  collection: "events"
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
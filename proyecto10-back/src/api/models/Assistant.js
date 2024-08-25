const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const assistantSchema = new mongoose.Schema({
  username: {type: String, required: true},
  secondName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true, enum: ["assistant", "admin"], default: "assistant"},
  avatar: {type: String, unique: true},
  events: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}]
},
{
  timestamps: true,
  collection: "assistants"
});

assistantSchema.pre("save", function() {
  this.password = bcrypt.hashSync(this.password, 10);
});

const Assistant = mongoose.model("Assistant", assistantSchema);

module.exports = Assistant;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true, enum: ["client", "admin"], default: "client"}
},
{
  timestamps: true,
  collection: "users"
});

userSchema.pre("save", function() {
  this.password = bcrypt.hashSync(this.password, 10);
})

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createSign, verifyToken };

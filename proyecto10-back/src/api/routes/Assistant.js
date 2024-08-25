const express = require("express");
const {
  register,
  login,
  getAllAssistants,
  updateAssistantData,
  updatePassword,
  deleteAssistant,
} = require("../controllers/Assistant");
const { isAuth, isAdmin } = require('../../middlewares/isAuth');

const assistantRouter = express.Router();

assistantRouter.post("/register", register);
assistantRouter.get("/login", login);
assistantRouter.get("/", isAuth, getAllAssistants);
assistantRouter.put("/:id", isAdmin, updateAssistantData);
assistantRouter.put("/:id/password", isAuth, updatePassword);
assistantRouter.delete("/:id", isAuth, deleteAssistant);

module.exports = { assistantRouter };

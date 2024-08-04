const express = require("express");
const { getUsers, getUserById, getUsersByName, getUsersByRole, updateUser, deleteUser, register, login } = require('../controllers/user');
const { isAuth } = require('../../middlewares/isAuth');

const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.get("/login", login);
userRoutes.get("/", [isAuth], getUsers);
userRoutes.get("/:id",[isAuth], getUserById);
userRoutes.get("/name/:username", [isAuth], getUsersByName);
userRoutes.get("/role/:role", [isAuth], getUsersByRole);
userRoutes.put("/:id", [isAuth], updateUser);
userRoutes.delete("/:id", [isAuth], deleteUser);

module.exports = userRoutes;
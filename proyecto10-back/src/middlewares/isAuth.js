const Assistant = require('../api/models/Assistant');
const { verifyToken } = require('../utils/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json("No hay token.");
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(parsedToken);

    const user = await Assistant.findById(id);
    user.password = null;
    req.user = user;

    next();
  } catch (error) {
    return res.status(403).json("No estás autorizado.");
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json("No estás autorizado.");
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(parsedToken);

    const user = await Assistant.findById(id);

    if (user.role === "admin") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(401).json("Necesitas permisos de administrador.");
    }

  } catch (error) {
    return res.status(401).json("No estás autorizado.");
  }
};

module.exports = { isAuth, isAdmin };
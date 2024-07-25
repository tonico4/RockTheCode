const { getSuperMarkets, getSuperMarketById, getSuperMarketsByName, createSuperMarket, updateSuperMarket, deleteSuperMarket } = require('../controllers/supermarket');

const superMarketRoutes = require("express").Router();

superMarketRoutes.post("/", createSuperMarket);
superMarketRoutes.get("/", getSuperMarkets);
superMarketRoutes.get("/:id", getSuperMarketById);
superMarketRoutes.get("/:name", getSuperMarketsByName);
superMarketRoutes.put("/:id", updateSuperMarket);
superMarketRoutes.delete("/:id", deleteSuperMarket);

module.exports = superMarketRoutes;
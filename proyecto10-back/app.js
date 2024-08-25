require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require('./src/config/mongoose');
const { assistantRouter } = require('./src/api/routes/Assistant');
const { eventsRouter } = require('./src/api/routes/Event');
const { isAuth } = require('./src/middlewares/isAuth');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/assistants", assistantRouter);
app.use("/api/events", isAuth, eventsRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found!");
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
});

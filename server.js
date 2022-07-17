const express = require("express");
const bodyparser = require("body-parser")
//const handlebars = require('express-handlebars');
const { engine } = require("express-handlebars");
require("dotenv").config();
PORT = process.env.PORT || 8080;
const cors = require("cors");

//Conexión a la DB de Mogo local
require("./database/conexion");
const PerroController = require("./controllers/perro");
const AdoptanteController = require("./controllers/adoptante");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//Endpoints:
app.get("/", async (req, res) => {
  res.json({
    perros: await PerroController.findAll(),
  });
});

app.get("/adoptantes", async (req, res) => {
  res.json({
    adoptante: await AdoptanteController.findAll(),
  });
});

app.get("/search/:input", async (req, res) => {
  const { input } = req.params;
  const buscador = await PerroController.searchPerros(input)
  res.json(buscador);
  console.log("LO QUE BUSCA", buscador)
});


app.post("/crear", async (req, res) => {
  await PerroController.create(req.body);
  res.json("Perro Creado y guardado en DB");
});

app.post("/formulario", async (req, res) => {
  await AdoptanteController.create(req.body);
  res.json("Formulario cargado y guardado en DB");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando por el Puerto: ${PORT}`);
});

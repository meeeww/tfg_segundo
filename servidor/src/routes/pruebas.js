// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");

// Importamos middlewares
const auth = require("../middleware/auth");
const { admin, viewer, self } = require("../middleware/roles");
const db = require("../middleware/db");

// Importamos utils
const checkToken = require("../utils/auth/checkToken");
const createUser = require("../utils/auth/createUser");
const createToken = require("../utils/auth/createToken");
const returnUser = require("../utils/auth/returnUser");

// Set del router
const router = express.Router();

router.get("/", async (req, res) => {
  const { token } = req.body;

  returnUser(token, res);
});

router.post("/", async (req, res) => {
  const { nombre, apellido, nick, email, contra } = req.body;

  if (
    nombre !== null &&
    nombre !== undefined &&
    apellido !== null &&
    apellido !== undefined &&
    nick !== null &&
    nick !== undefined &&
    email !== null &&
    email !== undefined &&
    contra !== null &&
    contra !== undefined
  ) {
    // Ninguna propiedad es null o undefined
    createUser(nombre, apellido, nick, email, contra, res);
  } else {
    // Al menos una propiedad es null o undefined
    res.status(400).send({ status: 400, success: false, reason: "No se han enviado suficientes parámetros." });
  }
});

router.post("/token", async (req, res) => {
  const { id } = req.body;

  if (id !== null && id !== undefined) {
    // Ninguna propiedad es null o undefined
    createToken(id, res);
  } else {
    // Al menos una propiedad es null o undefined
    res.status(400).send({ status: 400, success: false, reason: "No se han enviado suficientes parámetros." });
  }
});

module.exports = router;

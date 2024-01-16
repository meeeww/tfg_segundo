// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");

// Importamos middlewares
const auth = require("../middleware/auth");
const { admin, viewer, self } = require("../middleware/roles");
const db = require("../middleware/db");

// Importamos utils
const returnUser = require("../../utils/auth/returnUser");

// Set del router
const router = express.Router();

router.get("/", (req, res) => {
  // /usuarios
  // recibimos todos los usuarios

  const sqlSelect = "SELECT * FROM partidos WHERE tipo = 0";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      res.send({ status: 500, success: false, reason: "Problema con la base de datos.", error: err });
    } else {
      res.send({ status: 200, success: true, result: result });
    }
  });
});


router.get("/token", async (req, res) => {
  const { token } = req.body;

  returnUser(token, res);
});

module.exports = router;

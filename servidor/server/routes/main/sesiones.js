// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

// Importamos middlewares
const auth = require("../../middleware/auth");
const { admin, viewer, self } = require("../../middleware/roles");
const db = require("../../middleware/db");

// Importamos los modelos
const sesionDTO = require("../../models/sesionDTO");

// Importamos las queries
const {
  updateSesionesQuery,
} = require("../../queries/sesionesDAL");

// Importamos utils
const returnUserSelf = require("../../utils/auth/returnUserSelf");
const getSalt = require("../../utils/getSalt");
const createToken = require("../../utils/auth/createToken");

// Set del router
const router = express.Router();

router.get("/self", [auth, self], async (req, res) => {
  // /sesiones/self
  // Recibir el usuario actual

  try {
    const token = req.header("x-auth-token");
    returnUserSelf(token, res);
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.post("/", async (req, res) => {
  // /sesiones/login
  // Registrar sesión, crear token
  createToken(req, res);
});

router.put("/update", [auth, self], async (req, res) => {
  // /sesiones/update
  // Actualizar sesion

  try {
    const datosSesion = sesionDTO.fromReqBody(req.body);

    // Ajustar los parámetros según la consulta SQL
    const parametros = [
      datosSesion.ID_Sesion,
      datosSesion.ID_Usuario,
      datosSesion.Token_Sesion,
      datosSesion.Fecha_Inicio,
      datosSesion.Fecha_Expiracion,
      datosSesion.Estado_Sesion,
      datosSesion.Ultima_Actividad,
      datosSesion.Dispositivo,
    ];

    db.query(updateSesionesQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al actualizar la sesión", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Sesión actualizada con éxito", result: result });
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.delete("/logout", [auth, self], async (req, res) => {});

router.delete("/logoutAll", [auth, self], async (req, res) => {});

module.exports = router;

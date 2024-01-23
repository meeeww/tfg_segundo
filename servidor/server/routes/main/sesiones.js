// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

// Importamos middlewares
const auth = require("../../middleware/auth");
const { admin, viewer, self } = require("../../middleware/roles");
const db = require("../../middleware/db");

// Importamos los modelos
const usuarioDTO = require("../../models/usuarioDTO");

// Importamos las queries
const {
  selectUsuariosQuery,
  selectUsuarioQuery,
  selectUsuarioNombreQuery,
  selectUsuarioApellidoQuery,
  selectUsuarioNickQuery,
  selectUsuarioEmailQuery,
  selectUsuarioFechaQuery,
  selectUsuarioEstadoQuery,
  selectUsuarioVerificacionQuery,
  createUsuarioQuery,
  updateUsuarioQuery,
  updateUsuarioContraQuery,
  deleteUsuarioQuery,
} = require("../../queries/usuariosDAL");

// Importamos utils
const returnUserSelf = require("../../utils/auth/returnUserSelf");
const getSalt = require("../../utils/getSalt");

// Set del router
const router = express.Router();

router.get("/self", auth, self, async (req, res) => {
  // /sesiones/self
  // Recibir el usuario actual

  try {
    const token = req.header("x-auth-token");
    returnUserSelf(token, res);
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

module.exports = router;
    
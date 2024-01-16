// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");

// Importamos middlewares
const auth = require("../middleware/auth");
const { admin, viewer, self } = require("../middleware/roles");
const db = require("../middleware/db");

// Importamos los modelos
const usuarioDTO = require("../../models/usuarioDTO");

// Importamos las queries
const { selectUsuarioQuery, createUsuarioQuery, updateUsuarioQuery, enableUsuarioQuery, disableUsuarioQuery, deleteUsuarioQuery } = require("../../queries/usuariosDAL");

// Importamos utils
const returnUser = require("../../utils/auth/returnUser");

// Set del router
const router = express.Router();

router.get("/id=:id", (req, res) => {
  // /usuarios/id=X
  // recibimos todos los usuarios

  const { id } = req.params;

  const sqlSelect = "SELECT * FROM partidos WHERE ID_Usuario = ?";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      res.send({ status: 500, success: false, reason: "Problema con la base de datos.", error: err });
    } else {
      res.send({ status: 200, success: true, result: result });
    }
  });
});

router.put("/", async (req, res) => {
  // /usuarios/
  // actualizamos un usuario

  const usuario = usuarioDTO.fromReqBody(req.body);

  db.query(updateUsuarioQuery, [usuario], (err, result) => {
    if (err) {
      res.status(500).json({ success: false, mensaje: "Error al actualizar el usuario", error: err });
    } else {
      res.status(200).json({ success: true, mensaje: "Usuario actualizado con éxito", result: result });
    }
  });
});

router.delete("/", async (req, res) => {
  // /usuarios/
  // borramos un usuario

  const usuario = usuarioDTO.fromReqBody(req.body);

  db.query(deleteUsuarioQuery, [usuario], (err, result) => {
    if (err) {
      res.status(500).json({ success: false, mensaje: "Error al eliminar el usuario", error: err });
    } else {
      res.status(200).json({ success: true, mensaje: "Usuario eliminado con éxito", result: result });
    }
  });
});

module.exports = router;

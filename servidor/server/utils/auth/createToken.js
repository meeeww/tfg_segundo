// Importamos dependencias
const jwt = require("jsonwebtoken");

// Importamos middlewares
const auth = require("../../middleware/auth");
const { admin, viewer, self } = require("../../middleware/roles");
const db = require("../../middleware/db");

// Importamos los modelos
const sesionDTO = require("../../models/sesionDTO");

// Importamos las queries
const { createSesionQuery } = require("../../queries/sesionesDAL");

// Importamos utils
const getActualTime = require("../../utils/getActualTime");

function createToken(req, res) {
  try {
    const sesion = sesionDTO.fromReqBody(req.body);

    console.log(process.env.SECRETPASS)
    const token = jwt.sign({ id: sesion.ID_Usuario }, process.env.SECRETPASS, { algorithm: "HS256" }); // falta añadir los roles

    // Preparar los parámetros para la consulta SQL
    const parametros = [
      sesion.ID_Usuario,
      token,
      getActualTime(false),
      getActualTime(true),
      1,
      0,
      sesion.Dispositivo,
    ];

    db.query(createSesionQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al crear la sesión", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Sesión creada con éxito", token: token, result: result });
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
}

module.exports = createToken;

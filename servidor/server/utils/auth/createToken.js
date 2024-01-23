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

function createToken(id, res) {
  try {

    const sesion = new SesionDTO(1, 123, 'token123', 1618033988, 1618033999, 0, 1618033989, 'DispositivoEjemplo');

    // Preparar los parámetros para la consulta SQL
    const parametros = [
      sesion.ID_Usuario,
      sesion.Token_Sesion,
      sesion.Fecha_Inicio,
      sesion.Fecha_Expiracion,
      sesion.Ultima_Actividad,
      sesion.Dispositivo
    ];

    db.query(createSesionQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al crear la sesión", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Sesión creada con éxito", token: token, result: result });
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
}

module.exports = createToken;

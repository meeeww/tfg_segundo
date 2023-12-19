// Importamos middlewares
const db = require("../../middleware/db");

function checkToken(token, res) {
  const sqlComprobar = "SELECT ID_Usuario, Token_Sesion, Fecha_Expiracion FROM sesiones WHERE token = ?";

  db.query(sqlComprobar, token, (err, result) => {
    // sacamos la expiración
    if (err) {
      res.status(500).send({ status: 500, sucess: false, reason: "Problema de base de datos.", error: err });
    } else {
      if (result.length == 0) {
        // si no existe la sesion en la base de datos
        res.status(401).send({ status: 401, success: false, reason: "El token no es válido." });
      } else {
        //comprobamos si el token ha expirado
        if (result[0]["expire"] > Math.floor(new Date().getTime() / 1000.0)) {
          res.status(200).send({ status: 200, success: true, reason: "El token es válido", token: result[0]["token"] });
        } else {
          res.status(401).send({ status: 401, success: false, reason: "El token ha expirado." });
        }
      }
    }
  });
}

module.exports = checkToken;

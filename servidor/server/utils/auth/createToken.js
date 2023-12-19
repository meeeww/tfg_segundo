// Importamos dependencias
const jwt = require("jsonwebtoken");

// Importamos middlewares
const db = require("../../middleware/db");

function createToken(id, res) {
  const sqlInsertToken = "INSERT INTO sesiones (ID_Usuario, Token_Sesion, Fecha_Inicio, Fecha_Expiracion, Dispositivo) VALUES (?, ?, ?, ?, ?)";

  const token = jwt.sign({ id: id }, "jwtPrivateKey"); //creamos la token
  let fechaAhora = Math.floor(new Date().getTime() / 1000);
  let fechaExpiracion = new Date();
  fechaExpiracion.setMonth(fechaExpiracion.getMonth() + 1);
  fechaExpiracion = Math.floor(fechaExpiracion.getTime() / 1000);
  let dispositivo = "Pruebas";

  db.query(sqlInsertToken, [id, token, fechaAhora, fechaExpiracion, dispositivo], (err2, result2) => {
    if (err2) {
      res.send({ status: 500, sucess: false, reason: "Problema de base de datos.", error: err2 });
    } else {
      if (!result2.affectedRows) res.send({ status: 500, sucess: false, reason: "Problema de base de datos.", error: err2 });
      res.send({ status: 200, sucess: true, token: token });
    }
  });
}

module.exports = createToken;

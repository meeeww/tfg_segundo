// Importamos las dependencias
const bcrypt = require("bcrypt");

// Importamos middlewares
const db = require("../../middleware/db");

function createUser(nombre, apellido, nick, email, contra, res) {
  const sql = "INSERT INTO usuarios (Nombre_Usuario, Apellido_Usuario, Nick_Usuario, Email_Usuario, Contra_Usuario, Fecha_Creacion) VALUES (?, ?, ?, ?, ?, ?)";

  const fechaCreacion = Math.floor(new Date().getTime() / 1000);

  bcrypt.hash(contra, 13).then((contraHasheada) => {
    db.query(sql, [nombre, apellido, nick, email, contraHasheada, fechaCreacion], (err, result) => {
      if (err) {
        res.send({ status: 500, success: false, reason: "Problema con la base de datos.", error: err });
      } else {
        res.send({ status: 200, success: true, result: `Usuario ${nick} creado.` });
      }
    });
  });
}

module.exports = createUser;

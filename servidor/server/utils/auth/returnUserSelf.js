// Importamos middlewares
const db = require("../../middleware/db");

function returnUserSelf(token, res) {
  let usuario = { info: {}, amigos: {}, servidores: {}, configuraciones: {} };

  const sqlToken = "SELECT ID_Usuario FROM sesiones WHERE Token_Sesion = ?";
  const sqlUser =
    "SELECT Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE ID_Usuario = ?";
  const sqlAmigos =
    "SELECT ID_Relacion, ID_Usuario_Envia, ID_Usuario_Recibe, Fecha_Creacion, Estado_Relacion FROM amigos WHERE ID_Usuario_Recibe = ? OR ID_Usuario_Envia = ?";
  const sqlServidores = "SELECT ID_Servidor FROM usuarios_servidores WHERE ID_Usuario = ? AND Estado_Usuario = 0";
  const sqlConfiguraciones = "SELECT ID_Configuracion, Tipo_Configuracion, Valores_Configuracion FROM configuraciones WHERE ID_Usuario = ?";

  // Convertir db.query en una función que devuelve una promesa
  const queryPromise = (sql, params) =>
    new Promise((resolve, reject) => {
      db.query(sql, params, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

  queryPromise(sqlToken, [token])
    .then((resultToken) => {
      if (resultToken.length === 0) throw new Error("Token no encontrado");
      const idUsuario = resultToken[0]["ID_Usuario"];
      return Promise.all([
        queryPromise(sqlUser, [idUsuario]),
        queryPromise(sqlAmigos, [idUsuario, idUsuario]),
        queryPromise(sqlServidores, [idUsuario]),
        queryPromise(sqlConfiguraciones, [idUsuario]),
      ]);
    })
    .then(([resultUser, resultAmigos, resultServidores, resultConfiguraciones]) => {
      usuario.info = resultUser[0];
      usuario.amigos = resultAmigos;
      usuario.servidores = resultServidores;
      usuario.configuraciones = resultConfiguraciones;

      res.send({ status: 200, success: true, result: usuario });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 500, success: false, reason: "Problema con la base de datos.", error: err });
    });
}

module.exports = returnUserSelf;

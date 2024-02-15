const selectSesionesQuery =
  "SELECT ID_Sesion, ID_Usuario, Token_Sesion, Fecha_Inicio, Fecha_Expiracion, Estado_Sesion, Ultima_Actividad, Dispositivo FROM sesiones";
const selectSesionQuery =
  "SELECT ID_Sesion, ID_Usuario, Token_Sesion, Fecha_Inicio, Fecha_Expiracion, Estado_Sesion, Ultima_Actividad, Dispositivo FROM sesiones WHERE ID_Sesion = ?";
const createSesionQuery =
  "INSERT INTO sesiones (ID_Usuario, Token_Sesion, Fecha_Inicio, Fecha_Expiracion, Estado_Sesion, Ultima_Actividad, Dispositivo) VALUES (?, ?, ?, ?, ?, ?, ?)";
const updateSesionesQuery =
  "UPDATE sesiones SET ID_Usuario = ?, Token_Sesion = ?, Fecha_Inicio = ?, Fecha_Expiracion = ?, Estado_Sesion = ?, Ultima_Actividad = ?, Dispositivo = ? WHERE ID_Sesion = ?";

module.exports = {
  selectSesionesQuery,
  selectSesionQuery,
  createSesionQuery,
  updateSesionesQuery,
};

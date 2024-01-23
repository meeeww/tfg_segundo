const selectUsuariosQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios";
const selectUsuarioQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE ID_Usuario = ?";
const selectUsuarioNombreQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Nombre_Usuario LIKE '%?%'";
const selectUsuarioApellidoQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Nick_Usuario LIKE '%?%'";
const selectUsuarioNickQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Apellido_Usuario LIKE '%?%'";
const selectUsuarioEmailQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Email_Usuario LIKE '%?%'";
const selectUsuarioFechaQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Fecha_Creacion = ?";
const selectUsuarioEstadoQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Estado_Cuenta = ?";
const selectUsuarioVerificacionQuery =
  "SELECT ID_Usuario, Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta FROM usuarios WHERE Verificacion_Cuenta = ?";

const createUsuarioQuery =
  "INSERT INTO usuarios (Nombre_Usuario, Apellido_Usuario, Descripcion_Usuario, Nick_Usuario, Email_Usuario, Contra_Usuario, Foto_Usuario, Fecha_Creacion, Estado_Cuenta, Verificacion_Cuenta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
const updateUsuarioQuery =
  "UPDATE usuarios SET Nombre_Usuario = ?, Apellido_Usuario = ?, Descripcion_Usuario = ?, Nick_Usuario = ?, Email_Usuario = ?, Foto_Usuario = ?, Fecha_Creacion = ?, Estado_Cuenta = ?, Verificacion_Cuenta = ? WHERE ID_Usuario = ?";

const updateUsuarioContraQuery = "UPDATE usuarios SET Contra_Usuario = ? WHERE ID_Usuario = ?";
const deleteUsuarioQuery = "DELETE FROM usuarios WHERE ID_Usuario = ?";

module.exports = {
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
};

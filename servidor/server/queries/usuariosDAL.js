const updateUsuarioQuery = "UPDATE usuarios SET Nombre_Usuario = ?, Apellido_Usuario = ?, Descripcion_Usuario = ?, Nick_Usuario = ?, Email_Usuario = ?, Foto_Usuario = ?, Fecha_Creacion = ?, Estado_Cuenta = ?, Verificacion_Cuenta = ? WHERE ID_Usuario = ?";

module.exports = { updateUsuarioQuery };

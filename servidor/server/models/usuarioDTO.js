class usuarioDTO {
  constructor(S_Id, S_Nombre, S_Apellido, S_Descripcion, S_Nick, S_Email, S_Contra, S_Foto, S_Fecha, S_Estado, S_Verificacion) {
    this.ID_Usuario = S_Id;
    this.Nombre_Usuario = S_Nombre;
    this.Apellido_Usuario = S_Apellido;
    this.Descripcion_Usuario = S_Descripcion;
    this.Nick_Usuario = S_Nick;
    this.Email_Usuario = S_Email;
    this.Foto_Usuario = S_Foto;
    this.Fecha_Creacion = S_Fecha;
    this.Estado_Cuenta = S_Estado;
    this.Verificacion_Cuenta = S_Verificacion;
  }

  static fromJson(usuario) {
    return new usuarioDTO(
      usuario.ID_Usuario,
      usuario.Nombre_Usuario,
      usuario.Apellido_Usuario,
      usuario.Descripcion_Usuario,
      usuario.Nick_Usuario,
      usuario.Email_Usuario,
      usuario.Foto_Usuario,
      usuario.Fecha_Creacion,
      usuario.Estado_Cuenta,
      usuario.Verificacion_Cuenta
    );
  }

  static fromReqBody(reqBody) {
    return new usuarioDTO(
      reqBody.ID_Usuario,
      reqBody.Nombre_Usuario,
      reqBody.Apellido_Usuario,
      reqBody.Descripcion_Usuario,
      reqBody.Nick_Usuario,
      reqBody.Email_Usuario,
      reqBody.Foto_Usuario,
      reqBody.Fecha_Creacion,
      reqBody.Estado_Cuenta,
      reqBody.Verificacion_Cuenta
    );
  }
}

module.exports = usuarioDTO;

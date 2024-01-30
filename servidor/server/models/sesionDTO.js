class sesionDTO {
  constructor(S_Id, S_Usuario, S_Token, S_Inicio, S_Expiracion, S_Estado, S_Actividad, S_Dispositivo) {
    this.ID_Sesion = S_Id;
    this.ID_Usuario = S_Usuario;
    this.Token_Sesion = S_Token;
    this.Fecha_Inicio = S_Inicio;
    this.Fecha_Expiracion = S_Expiracion;
    this.Estado_Sesion = S_Estado;
    this.Ultima_Actividad = S_Actividad;
    this.Dispositivo = S_Dispositivo;
  }

  static fromJson(sesion) {
    return new sesionDTO(
      sesion.ID_Sesion,
      sesion.ID_Usuario,
      sesion.Token_Sesion,
      sesion.Fecha_Inicio,
      sesion.Fecha_Expiracion,
      sesion.Estado_Sesion,
      sesion.Ultima_Actividad,
      sesion.Dispositivo
    );
  }

  static fromReqBody(reqBody) {
    return new sesionDTO(
      reqBody.ID_Sesion,
      reqBody.ID_Usuario,
      reqBody.Token_Sesion,
      reqBody.Fecha_Inicio,
      reqBody.Fecha_Expiracion,
      reqBody.Estado_Sesion,
      reqBody.Ultima_Actividad,
      reqBody.Dispositivo
    );
  }
}

module.exports = sesionDTO;

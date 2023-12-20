CREATE TABLE usuarios (
  ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
  Nombre_Usuario VARCHAR(32) NOT NULL,
  Apellido_Usuario VARCHAR(32) NOT NULL,
  Descripcion_Usuario VARCHAR(128) DEFAULT '¡Hola!',
  Nick_Usuario VARCHAR(16) NOT NULL,
  Email_Usuario VARCHAR(128) NOT NULL,
  Contra_Usuario VARCHAR(256) NOT NULL,
  Foto_Usuario INT,
  Fecha_Creacion INT NOT NULL,
  Estado_Cuenta INT DEFAULT 0 NOT NULL,
  Verificacion_Cuenta TINYINT DEFAULT 0 NOT NULL
);

CREATE TABLE configuraciones (
  ID_Configuracion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  Tipo_Configuracion INT NOT NULL,
  Valores_Configuracion JSON NOT NULL,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE sesiones (
  ID_Sesion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  Token_Sesion VARCHAR(256) NOT NULL,
  Fecha_Inicio INT NOT NULL,
  Fecha_Expiracion INT NOT NULL,
  Estado_Sesion INT DEFAULT 0 NOT NULL,
  Ultima_Actividad INT NOT NULL,
  Dispositivo VARCHAR(256) NOT NULL,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE logs (
  ID_Log INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  ID_Sesion INT NOT NULL,
  Tipo_Log INT NOT NULL,
  Mensaje_Log TEXT NOT NULL,
  Nivel INT NOT NULL,
  Fecha_Creacion INT NOT NULL,
  Datos JSON NOT NULL,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Sesion) REFERENCES sesiones(ID_Sesion)
);

CREATE TABLE amigos (
  ID_Relacion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Recibe INT NOT NULL,
  ID_Usuario_Envia INT NOT NULL,
  Fecha_Creacion INT NOT NULL,
  Estado_Relacion INT NOT NULL,
  FOREIGN KEY (ID_Usuario_Recibe) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Usuario_Envia) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE multimedia (
  ID_Multimedia INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  Peso_Multimedia INT NOT NULL,
  Formato_Multimedia VARCHAR(16) NOT NULL,
  URL_Multimedia VARCHAR(64) NOT NULL,
  Duracion_Multimedia INT NOT NULL,
  Estado_Multimedia INT DEFAULT 0 NOT NULL,
  Fecha_Creacion INT NOT NULL,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE servidores (
  ID_Servidor INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Creador INT NOT NULL,
  Nombre_Servidor VARCHAR(32) NOT NULL,
  Descripcion_Servidor TEXT NOT NULL,
  Imagen_Servidor INT,
  Fecha_Creacion INT NOT NULL,
  Modo_Mensajes INT DEFAULT 0 NOT NULL,
  FOREIGN KEY (ID_Usuario_Creador) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (Imagen_Servidor) REFERENCES multimedia(ID_Multimedia)
);

CREATE TABLE usuarios_servidores (
  ID_Servidor INT NOT NULL,
  ID_Usuario INT NOT NULL,
  Estado_Usuario INT DEFAULT 0 NOT NULL,
  Rol_Usuario INT DEFAULT 0 NOT NULL,
  Fecha_Entrada INT NOT NULL,
  Fecha_Salida INT,
  FOREIGN KEY (ID_Servidor) REFERENCES servidores(ID_Servidor),
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE mensajes (
  ID_Mensaje INT AUTO_INCREMENT PRIMARY KEY,
  ID_Chat INT NOT NULL,
  ID_Usuario_Creador INT NOT NULL,
  Contenido_Mensaje TEXT NOT NULL,
  Tipo_Mensaje INT NOT NULL,
  Fecha_Envio INT NOT NULL,
  Fecha_Recepcion INT NOT NULL,
  Estado_Mensaje INT DEFAULT 0 NOT NULL,
  ID_Multimedia INT,
  FOREIGN KEY (ID_Usuario_Creador) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Multimedia) REFERENCES multimedia(ID_Multimedia)
);

CREATE TABLE reacciones_mensajes (
  ID_Reaccion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Mensaje INT NOT NULL,
  ID_Usuario INT NOT NULL,
  Tipo_Reaccion VARCHAR(32) NOT NULL,
  Fecha_Reaccion INT NOT NULL,
  FOREIGN KEY (ID_Mensaje) REFERENCES mensajes(ID_Mensaje),
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE reportes (
  ID_Reporte INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Reporta INT NOT NULL,
  ID_Usuario_Reportado INT NOT NULL,
  Descripcion_Reporte TEXT NOT NULL,
  Fecha_Reporte INT NOT NULL,
  FOREIGN KEY (ID_Usuario_Reporta) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Usuario_Reportado) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE notificaciones (
  ID_Notificacion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  Datos_Notificacion JSON NOT NULL,
  Tipo_Notificacion INT NOT NULL,
  Estado_Notificacion INT DEFAULT 0 NOT NULL,
  Fecha_Notificacion INT NOT NULL,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

ALTER TABLE usuarios
ADD CONSTRAINT usuarios_ibfk_1
FOREIGN KEY (Foto_Usuario) REFERENCES multimedia(ID_Multimedia);
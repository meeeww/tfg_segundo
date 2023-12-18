CREATE TABLE usuarios (
  ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
  Nombre_Usuario VARCHAR(32) NOT NULL,
  Apellido_Usuario VARCHAR(32) NOT NULL,
  Descripcion_Usuario VARCHAR(128) DEFAULT "¡Hola!",
  Nick_Usuario VARCHAR(16) NOT NULL,
  Email_Usuario VARCHAR(128) NOT NULL,
  Contra_Usuario VARCHAR(256) NOT NULL,
  Foto_Usuario INT NULL,
  Fecha_Creacion INT NOT NULL,
  Estado_Cuenta INT DEFAULT 0 NOT NULL,
  Verificacion_Cuenta TINYINT DEFAULT 0 NOT NULL
);

CREATE TABLE configuraciones (
  ID_Configuracion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT,
  Tipo_Configuracion INT,
  Valores_Configuracion JSON,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE sesiones (
  ID_Sesion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT NOT NULL,
  Token_Sesion VARCHAR(256) NOT NULL,
  Fecha_Inicio INT NOT NULL,
  Fecha_Expiracion INT NOT NULL,
  Estado_Sesion INT DEFAULT 0,
  Ultima_Actividad INT,
  Dispositivo VARCHAR(256),
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE logs (
  ID_Log INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT,
  ID_Sesion INT,
  Tipo_Log INT,
  Mensaje_Log TEXT,
  Nivel INT,
  Fecha_Creacion INT,
  Datos JSON,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Sesion) REFERENCES sesiones(ID_Sesion)
);

CREATE TABLE amigos (
  ID_Relacion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Recibe INT,
  ID_Usuario_Envia INT,
  Fecha_Creacion INT,
  Estado_Relacion INT,
  FOREIGN KEY (ID_Usuario_Recibe) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Usuario_Envia) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE multimedia (
  ID_Multimedia INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario INT,
  Peso_Multimedia INT,
  Formato_Multimedia VARCHAR(16),
  URL_Multimedia VARCHAR(64),
  Duracion_Multimedia INT,
  Estado_Multimedia INT,
  Fecha_Creacion INT,
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE servidores (
  ID_Servidor INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Creador INT,
  Nombre_Servidor VARCHAR(32),
  Descripcion_Servidor TEXT,
  Imagen_Servidor INT,
  Fecha_Creacion INT,
  Modo_Mensajes INT,
  FOREIGN KEY (ID_Usuario_Creador) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (Imagen_Servidor) REFERENCES multimedia(ID_Multimedia)
);

CREATE TABLE usuarios_servidores (
  ID_Servidor INT,
  ID_Usuario INT,
  Estado_Usuario INT,
  Rol_Usuario INT,
  Fecha_Entrada INT,
  Fecha_Salida INT,
  FOREIGN KEY (ID_Servidor) REFERENCES servidores(ID_Servidor),
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE mensajes (
  ID_Mensaje INT AUTO_INCREMENT PRIMARY KEY,
  ID_Chat INT,
  ID_Usuario_Creador INT,
  Contenido_Mensaje TEXT,
  Tipo_Mensaje INT,
  Fecha_Envio INT,
  Fecha_Recepcion INT,
  Estado_Mensaje INT,
  ID_Multimedia INT,
  FOREIGN KEY (ID_Usuario_Creador) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Multimedia) REFERENCES multimedia(ID_Multimedia)
);

CREATE TABLE reacciones_mensajes (
  ID_Reaccion INT AUTO_INCREMENT PRIMARY KEY,
  ID_Mensaje INT,
  ID_Usuario INT,
  Tipo_Reaccion VARCHAR(32),
  Fecha_Reaccion INT,
  FOREIGN KEY (ID_Mensaje) REFERENCES mensajes(ID_Mensaje),
  FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);

CREATE TABLE reportes (
  ID_Reporte INT AUTO_INCREMENT PRIMARY KEY,
  ID_Usuario_Reporta INT,
  ID_Usuario_Reportado INT,
  Descripcion_Reporte TEXT,
  Fecha_Reporte INT,
  FOREIGN KEY (ID_Usuario_Reporta) REFERENCES usuarios(ID_Usuario),
  FOREIGN KEY (ID_Usuario_Reportado) REFERENCES usuarios(ID_Usuario)
);

ALTER TABLE usuarios
ADD CONSTRAINT usuarios_ibfk_1
FOREIGN KEY (Foto_Usuario) REFERENCES multimedia(ID_Multimedia);
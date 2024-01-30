// Importamos dependencias
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

// Importamos middlewares
const auth = require("../../middleware/auth");
const { admin, viewer, self } = require("../../middleware/roles");
const db = require("../../middleware/db");

// Importamos los modelos
const usuarioDTO = require("../../models/usuarioDTO");

// Importamos las queries
const {
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
} = require("../../queries/usuariosDAL");

// Importamos utils
const returnUserSelf = require("../../utils/auth/returnUserSelf");
const getSalt = require("../../utils/getSalt");

// Set del router
const router = express.Router();

router.get("/", async (req, res) => {
  // /usuarios/
  // Recibir todos los usuarios

  try {
    db.query(selectUsuariosQuery, (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuarios no encontrados." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/id=:id", (req, res) => {
  // /usuarios/id=X
  // Recibir usuario a partir de su id

  try {
    const { id } = req.params;

    db.query(selectUsuarioQuery, [id], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/nombre=:nombre", (req, res) => {
  // /usuarios/nombre=X
  // Recibir usuario a partir de su nombre

  try {
    const { nombre } = req.params;

    db.query(selectUsuarioNombreQuery, [nombre], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/apellido=:apellido", (req, res) => {
  // /usuarios/apellido=X
  // Recibir usuario a partir de su apellido

  try {
    const { apellido } = req.params;

    db.query(selectUsuarioApellidoQuery, [apellido], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/nick=:nick", (req, res) => {
  // /usuarios/nick=X
  // Recibir usuario a partir de su nick

  try {
    const { nick } = req.params;

    db.query(selectUsuarioNickQuery, [nick], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/email=:email", (req, res) => {
  // /usuarios/email=X
  // Recibir usuario a partir de su email

  try {
    const { email } = req.params;

    db.query(selectUsuarioEmailQuery, [email], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/fecha=:fecha", (req, res) => {
  // /usuarios/fecha=X
  // Recibir usuario a partir de su fecha

  try {
    const { fecha } = req.params;

    db.query(selectUsuarioFechaQuery, [fecha], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/estado=:estado", (req, res) => {
  // /usuarios/nombre=X
  // Recibir usuario a partir de su estado

  try {
    const { estado } = req.params;

    db.query(selectUsuarioEstadoQuery, [estado], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.get("/verificacion=:verificacion", (req, res) => {
  // /usuarios/nombre=X
  // Recibir usuario a partir de su verificacion

  try {
    const { verificacion } = req.params;

    db.query(selectUsuarioVerificacionQuery, [verificacion], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, mensaje: "Problema con la base de datos.", error: err });
      }
      if (result.length === 0) {
        return res.status(404).send({ success: false, mensaje: "Usuario no encontrado." });
      }
      res.status(200).send({ success: true, result: result });
    });
  } catch (error) {
    res.status(500).send({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.post("/", async (req, res) => {
  // /usuarios/
  // Crear un usuario

  try {
    const datosUsuario = usuarioDTO.fromReqBody(req.body);

    // Preparar los parámetros para la consulta SQL
    const parametros = [
      datosUsuario.Nombre_Usuario,
      datosUsuario.Apellido_Usuario,
      datosUsuario.Descripcion_Usuario,
      datosUsuario.Nick_Usuario,
      datosUsuario.Email_Usuario,
      datosUsuario.Foto_Usuario,
      datosUsuario.Fecha_Creacion,
      datosUsuario.Estado_Cuenta,
      datosUsuario.Verificacion_Cuenta,
    ];

    db.query(createUsuarioQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al crear el usuario", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Usuario creado con éxito", result: result });
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.put("/", async (req, res) => {
  // /usuarios/
  // Actualizamos un usuario

  try {
    const datosUsuario = usuarioDTO.fromReqBody(req.body);

    // Ajustar los parámetros según la consulta SQL
    const parametros = [
      datosUsuario.Nombre_Usuario,
      datosUsuario.Apellido_Usuario,
      datosUsuario.Descripcion_Usuario,
      datosUsuario.Nick_Usuario,
      datosUsuario.Email_Usuario,
      datosUsuario.Foto_Usuario,
      datosUsuario.Fecha_Creacion,
      datosUsuario.Estado_Cuenta,
      datosUsuario.Verificacion_Cuenta,
      datosUsuario.ID_Usuario,
    ];

    db.query(updateUsuarioQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al actualizar el usuario", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Usuario actualizado con éxito", result: result });
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.put("/contra", async (req, res) => {
  // /usuarios/contra
  // Actualizamos la contraseña de un usuario

  try {
    const datosUsuario = usuarioDTO.fromReqBody(req.body);
    const contra = req.body.contra;

    console.log(contra);

    // Encriptamos la contraseña
    await bcrypt.hash(contra, getSalt(), (err, hash) => {
      if (err) {
        console.error("Error al encriptar la contraseña;", err);
        throw err;
      }

      const parametros = [hash, datosUsuario.ID_Usuario];

      db.query(updateUsuarioContraQuery, parametros, (err, result) => {
        if (err) {
          return res.status(500).json({ success: false, mensaje: "Error al actualizar la contraseña", error: err });
        }
        res.status(200).json({ success: true, mensaje: "Contraseña actualizada con éxito" });
      });

      return hash;
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
});

router.delete("/", async (req, res) => {
  // /usuarios/
  // Borramos un usuario

  try {
    const datosUsuario = usuarioDTO.fromReqBody(req.body);

    // Asegúrate de que el ID del usuario está presente
    if (!datosUsuario.ID_Usuario) {
      return res.status(400).json({ success: false, mensaje: "ID del usuario no proporcionado" });
    }

    const parametros = [datosUsuario.ID_Usuario];

    db.query(deleteUsuarioQuery, parametros, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: "Error al eliminar el usuario", error: err });
      }
      res.status(200).json({ success: true, mensaje: "Usuario eliminado con éxito" });
    });
  } catch (error) {
    res.status(500).json({ success: false, mensaje: "Error del servidor", error: error });
  }
});

module.exports = router;

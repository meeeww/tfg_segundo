// Importamos dependencias
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send({ status: 401, success: false, reason: "No se ha proporcionado un token." });

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({ status: 401, success: false, reason: "El token ha expirado." });
  }
  
  next();
};

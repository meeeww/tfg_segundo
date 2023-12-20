// Importamos las dependencias
const mysql = require("mysql");

const db = mysql.createPool({
  //Creamos la conexion a la base de datos
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;

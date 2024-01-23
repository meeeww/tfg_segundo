// Importamos las dependencias
const express = require("express");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser")
const cors = require("cors");

// Set del servidor
const app = express();

// Set de rate limit
const limiter = rateLimit({
    windowMs: 60000, // 1 minuto cooldown
    max: 210, // requests permitidas
    message: {
        status: 429,
        error: "Has superado las peticiones al servidor. Vuelve a intentarlo en 1 minuto.",
    },
});

// Importamos middlewares
app.use(express.json());
app.use(limiter);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

// Importamos rutas
const usuariosRouter = require("./routes/main/usuarios");

// Seteamos rutas
app.use("/usuarios", usuariosRouter);

// Iniciamos el servidor
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
});
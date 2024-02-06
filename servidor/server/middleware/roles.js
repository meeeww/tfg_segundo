function admin(req, res, next) {
    if (req.user.rol < 20)
        return res.status(403).send({
            status: 403,
            success: false,
            error: "Acceso denegado.",
        });

    next();
}

function self(req, res, next) {
    if (req.body.ID_Usuario != req.user.id) // req.user es el usuario del token, req.body es el usuario que se envia en el http request
        return res.status(403).send({
            status: 403,
            success: false,
            error: "Acceso denegado.",
        });

    next();
}

module.exports = { admin, self };
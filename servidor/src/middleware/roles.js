// Necesita cambios

function admin(req, res, next) {
    if (req.user.rol < 20)
        return res.status(403).send({
            status: 403,
            success: false,
            error: "Acceso denegado.",
        });

    next();
}

function viewer(req, res, next) {
    if (!req.user.rol)
        if (req.user.rol != 0)
            return res.status(403).send({
                status: 403,
                success: false,
                error: "Acceso denegado.",
            });

    next();
}

function self(req, res, next) {
    if (req.body.id_usuario != req.user.id && req.user.rol < 20)
        return res.status(403).send({
            status: 403,
            success: false,
            error: "Acceso denegado.",
        });

    next();
}

module.exports = { admin, viewer, self };
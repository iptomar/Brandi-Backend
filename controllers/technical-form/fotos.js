var db = require('../models/db')

exports.adicionarFoto = (req, res) => {
    db.fotos.create({
        Foto_URL: req.body.Foto_URL,
        Referencia: req.body.Referencia
    });
}

exports.updateFoto = (req, res, next) => {
    db.fotos.update({
        Foto_URL: req.body.Foto_URL,
        Referencia: req.body.Referencia
    }, {
        where: req.params.FotoId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
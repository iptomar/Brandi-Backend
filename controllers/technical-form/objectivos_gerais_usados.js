var db = require('../models/db')

exports.register = (req, res) => {
    db.objectivos_gerais_usados.create({
        //SO TEM PK
    });
}

exports.updateClient = (req, res, next) => {
    db.objectivos_gerais_usados.update({
        //SO TEM PK
    }, {
        where: req.params.objectivos_gerais_usadosId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
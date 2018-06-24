var db = require('../../models/db')

exports.adicionarObjGerUsa = (req, res) => {
    db.objectivos_gerais_usados.create({
        //SO TEM PK
    });
}

exports.updateObjGerUsa = (req, res, next) => {
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
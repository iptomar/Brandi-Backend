var db = require('../../models/db')

exports.adicionarObjGer = (req, res) => {
    db.objectivos_gerais.create({
        Nome: req.body.Nome
    });
}

exports.updateObjGer = (req, res, next) => {
    db.objectivos_gerais.update({
        Nome: req.body.Nome
    }, {
        where: req.params.ObjGerId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
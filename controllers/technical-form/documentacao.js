var db = require('../models/db')

exports.adicionarDocu = (req, res) => {
    db.documentacao.create({
        Tipo_Documentacao: req.body.Tipo_Documentacao,
        Nome: req.body.Nome
}

exports.updateDocu = (req, res, next) => {
    db.documentacao.update({
        Tipo_Documentacao: req.body.Tipo_Documentacao,
        Nome: req.body.Nome
    }, {
        where: req.params.DocuId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
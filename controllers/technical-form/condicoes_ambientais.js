var db = require('../models/db')

exports.adicionarCondAmb = (req, res) => {
    db.condicoes_ambientais.create({
        Descricao: req.body.Descricao,
        Temperatura_Humido: req.body.Temperatura_Humido,
        Temperatura_Seco: req.body.Temperatura_Seco,
        Periodo_Humido: req.body.Periodo_Humido,
        Periodo_Seco: req.body.Periodo_Seco,
        Observacoes: req.body.Observacoes
    });
}

exports.updateCondAmb = (req, res, next) => {
    db.condicoes_ambientais.update({
        Descricao: req.body.Descricao,
        Temperatura_Humido: req.body.Temperatura_Humido,
        Temperatura_Seco: req.body.Temperatura_Seco,
        Periodo_Humido: req.body.Periodo_Humido,
        Periodo_Seco: req.body.Periodo_Seco,
        Observacoes: req.body.Observacoes
    }, {
        where: req.params.CondAmbId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
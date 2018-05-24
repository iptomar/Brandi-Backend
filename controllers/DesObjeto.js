var db = require('../models/db')

exports.adicionar = (req, res) => {
    db.Designacao_Objeto.create({
        designacao: req.body.designacao,
        tipologia: req.body.tipologia,
        localizacao: req.body.localizacao
    })
};

exports.listar = (req, res) => {
    db.Designacao_Objeto.findAll()
};
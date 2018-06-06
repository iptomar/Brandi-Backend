var db = require('../models/db')

exports.adicionar = (req, res) => {
    db.designacao_objetos.create({
        designacao: req.body.designacao,
        tipologia: req.body.tipologia,
        localizacao: req.body.localizacao
    })
};

exports.listar = (req, res) => {
    db.designacao_objetos.findAll()
};
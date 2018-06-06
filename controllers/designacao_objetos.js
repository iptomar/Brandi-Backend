var db = require("../models/db");

exports.adicionar = (req, res) => {
    db.designacao_objetos.create({
        designacao: req.body.designacao,
        tipologia: req.body.tipologia,
        localizacao: req.body.localizacao
    }).then(
        obj => res.status(200).send(obj),
        error => res.status(500).send(error)
    );
};

exports.listar = (req, res) => {
    db.designacao_objetos.findAll();
};
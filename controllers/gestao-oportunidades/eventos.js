var db = require('../models/db')

exports.adicionarEventos = (req, res) => {
    db.eventos.create({
        Descricao: req.body.Descricao,
        Data_Evento: req.body.Data_Evento,
        Tipo: req.body.Tipo
    });
}

exports.updateEventos = (req, res, next) => {
    db.eventos.update({
        Descricao: req.body.Descricao,
        Data_Evento: req.body.Data_Evento,
        Tipo: req.body.Tipo
    }, {
        where: req.params.EventosId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
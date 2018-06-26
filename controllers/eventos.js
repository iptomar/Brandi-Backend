var db = require('../models/db')


exports.evento = (req, res) => {
    db.Eventos.find({ where: { id: req.query.id } }).then(
        evento => res.status(200).json({
            "evento": evento
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do evento" + req.query.id)
};

exports.eliminarevento = (req, res, next) => {

    db.Eventos.destroy({
        where: { id: req.query.id }        
    })
    console.log("evento apagado")
}

exports.listareventos = (req, res) => {
    db.Eventos.findAll().then(
        Eventos => res.status(200).json({
            "eventos": Eventos
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista de Eventos enviada")
};

exports.adicionarevento = (req, res) => {
    db.Eventos.create({
        Descricao: req.query.descricao,
        Data_Evento: Date.now(),
        Tipo: req.query.tipo
    });
}

exports.editarevento = (req, res, next) => {
    db.Eventos.update({
        Descricao: req.query.descricao,
        Data_Evento: Date.now(),
        Tipo: req.query.tipo
    }, {
        where: {id : req.query.id}
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
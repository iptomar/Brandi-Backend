var db = require('../../models/db')


exports.evento = (req, res) => {
    db.eventos.find({ where: { id: req.query.id } }).then(
        evento => res.status(200).json({
            "evento": evento
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do evento" + req.query.id)
};

exports.eliminarevento = (req, res, next) => {

    db.eventos.destroy({
        where: { id: req.query.id }        
    })
    console.log("evento apagado")
}

exports.listareventos = (req, res) => {
    db.eventos.findAll().then(
        Eventos => res.status(200).json({
            "eventos": Eventos
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista de Eventos enviada")
};

exports.adicionarevento = (req, res) => {
    db.eventos.create({
        Descricao: req.query.descricao,
        Data_Evento: Date.now(),
        Tipo: req.query.tipo
    });
}

exports.editarevento = (req, res, next) => {
    db.eventos.update({
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
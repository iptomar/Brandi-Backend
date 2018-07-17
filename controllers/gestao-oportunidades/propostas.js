var db = require('../../models/db')



exports.listarPropostas = (req, res) => {
    db.Propostas.findAll().then(
        Propostas => res.status(200).json({
            "Propostas": Propostas
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista proposta enviada")
}

exports.Proposta = (req, res) => {
    db.Propostas.find({ where: { id: req.query.id } }).then(
        Propostas => res.status(200).json({
            "Propostas": Propostas
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes da proposta " + req.query.id)
};

exports.EliminarProposta = (req, res, next) => {

    db.Propostas.destroy({
        where: { id: req.query.id },
    })
    console.log("Proposta apagada " + req.query.id)
}


exports.adicionarProposta = (req, res) => {
    db.Propostas.create({
        Aceitação_Proposta: req.query.Aceitação_Proposta,
        Justificacao_Recusa: req.query.Justificacao_Recusa,
        Descricao: req.query.Descricao,
        Data_Elaboracao_Proposta: req.query.Data_Elaboracao_Proposta,
        Data_Envio_Proposta: req.query.Data_Envio_Proposta
    });
}

exports.editarProposta = (req, res, next) => {
    db.Propostas.update({
        Aceitação_Proposta: req.query.Aceitação_Proposta,
        Justificacao_Recusa: req.query.Justificacao_Recusa,
        Descricao: req.query.Descricao,
        Data_Elaboracao_Proposta: req.query.Data_Elaboracao_Proposta,
        Data_Envio_Proposta: req.query.Data_Envio_Proposta
    }, {
        where: {id : req.query.id}
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
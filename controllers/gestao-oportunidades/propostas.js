var db = require('../../models/db')



exports.listarPropostas = (req, res) => {
    db.propostas.findAll().then(
        propostas => res.status(200).json({
            "propostas": propostas
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista proposta enviada")

}

exports.proposta = (req, res) => {
    db.propostas.find({ where: { id: req.query.id } }).then(
        propostas => res.status(200).json({
            "proposta": propostas
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes da proposta " + req.query.id)
};

exports.EliminarProposta = (req, res, next) => {

    db.propostas.destroy({
        where: { id: req.query.id },
    })
    console.log("Proposta apagada " + req.query.id)
}


exports.adicionarProposta = (req, res) => {

    db.propostas.create({

        Aceitação_Proposta: req.query.Aceitação_Proposta,
        Justificacao_Recusa: req.query.Justificacao_Recusa,
        Descricao: req.query.Descricao,
        Data_Elaboracao_Proposta: Date.now(),
        Data_Envio_Proposta: Date.now(),
        ID_Pedido: req.query.ID_Pedido,
        ID_Coordenador: req.query.ID_Coordenador

    });
    console.log("Proposta adicionada")
}

exports.editarProposta = (req, res, next) => {
    console.log("Proposta editada" + req.query.id)
    db.propostas.update({
        Aceitação_Proposta: req.query.Aceitação_Proposta,
        Justificacao_Recusa: req.query.Justificacao_Recusa,
        Descricao: req.query.Descricao,        
        Data_Envio_Proposta: Date.now()
    }, {
            where: { id: req.query.id }
        }).then(
            (rowsUpdated) => {
                res.json(rowsUpdated)
            }
        ).catch(next)
}
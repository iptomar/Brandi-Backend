var db = require('../models/db')

exports.adicionarPropostas = (req, res) => {
    db.propostas.create({
        Aceitação_Proposta: req.body.Aceitação_Proposta,
        Justificacao_Recusa: req.body.Justificacao_Recusa,
        Descricao: req.body.Descricao,
        Data_Elaboracao_Proposta: req.body.Data_Elaboracao_Proposta,
        Data_Envio_Proposta: req.body.Data_Envio_Proposta
    });
}

exports.updatePropostas = (req, res, next) => {
    db.propostas.update({
        Aceitação_Proposta: req.body.Aceitação_Proposta,
        Justificacao_Recusa: req.body.Justificacao_Recusa,
        Descricao: req.body.Descricao,
        Data_Elaboracao_Proposta: req.body.Data_Elaboracao_Proposta,
        Data_Envio_Proposta: req.body.Data_Envio_Proposta
    }, {
        where: req.params.PropostasId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
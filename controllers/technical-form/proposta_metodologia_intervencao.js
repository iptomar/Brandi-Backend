var db = require('../models/db')

exports.adicionarProposta = (req, res) => {
    db.Clientes.create({
        Estrutura: req.body.Estrutura,
        Estrutura_Recurso: req.body.Estrutura_Recurso,
        Superficie: req.body.Superficie,
        Superficie_Recurso: req.body.Superficie_Recurso,
        Elementos: req.body.Elementos,
        Elementos_Recurso: req.body.Elementos_Recurso,
        Observacoes: req.body.Observacoes,
        Data_Informacao_Proposta: req.body.Data_Informacao_Proposta,
        Data_Aceitacao_Proposta: req.body.Data_Aceitacao_Proposta
    });
}

exports.updateProposta = (req, res, next) => {
    db.Clientes.update({
        Estrutura: req.body.Estrutura,
        Estrutura_Recurso: req.body.Estrutura_Recurso,
        Superficie: req.body.Superficie,
        Superficie_Recurso: req.body.Superficie_Recurso,
        Elementos: req.body.Elementos,
        Elementos_Recurso: req.body.Elementos_Recurso,
        Observacoes: req.body.Observacoes,
        Data_Informacao_Proposta: req.body.Data_Informacao_Proposta,
        Data_Aceitacao_Proposta: req.body.Data_Aceitacao_Proposta
    }, {
        where: req.params.PropostaId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
var db = require('../../models/db')

exports.listar_analises_preliminares = (req, res) => {
    db.analises_preliminares.findAll().then(
        analises_preliminares => res.status(200).json({
            "analises_preliminares": analises_preliminares
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista analises_preliminares enviada")
}

/*exports.Proposta = (req, res) => {
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




exports.adicionarAnalPrem = (req, res) => {
    db.analises_preliminares.create({
        Descricao_Analise: req.body.Descricao_Analise,
        Data_Realizacao_Analise: req.body.Data_Realizacao_Analise,
        Locao_realizacao_Analise: req.body.Locao_realizacao_Analise,
        Inicio_Analise: req.body.Inicio_Analise,
        Fim_Analise: req.body.Fim_Analise,
        Tipo: req.body.Tipo,
        Distancia_Deslocacao: req.body.Distancia_Deslocacao,
        Outras_Despesas: req.body.Outras_Despesas
    });
}

exports.updateAnalPrem = (req, res, next) => {
    db.analises_preliminares.update({
        Descricao_Analise: req.body.Descricao_Analise,
        Data_Realizacao_Analise: req.body.Data_Realizacao_Analise,
        Locao_realizacao_Analise: req.body.Locao_realizacao_Analise,
        Inicio_Analise: req.body.Inicio_Analise,
        Fim_Analise: req.body.Fim_Analise,
        Tipo: req.body.Tipo,
        Distancia_Deslocacao: req.body.Distancia_Deslocacao,
        Outras_Despesas: req.body.Outras_Despesas
    }, {
        where: req.params.AnalPremId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}*/
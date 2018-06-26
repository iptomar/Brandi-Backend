var db = require('../models/db')

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
}
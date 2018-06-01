var db = require('../models/db')

exports.adicionarTabela = (req, res) => {
    db.tabela_exames_analises.create({
        Referencia: req.body.Referencia,
        Localizacao: req.body.Localizacao,
        Objectivos: req.body.Objectivos,
        Resultados: req.body.Resultados,
        Entidade: req.body.Entidade,
        Data: req.body.Data
    });
}

exports.updateTabela = (req, res, next) => {
    db.tabela_exames_analises.update({
        Referencia: req.body.Referencia,
        Localizacao: req.body.Localizacao,
        Objectivos: req.body.Objectivos,
        Resultados: req.body.Resultados,
        Entidade: req.body.Entidade,
        Data: req.body.Data
    }, {
        where: req.params.TabelaId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
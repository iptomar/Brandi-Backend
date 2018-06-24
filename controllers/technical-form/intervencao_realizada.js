var db = require('../../models/db')

exports.adicionarInterReal = (req, res) => {
    db.intervencao_realizada.create({
        Estrutura: req.body.Estrutura,
        Estrutura_Recurso: req.body.Estrutura_Recurso,
        Superficie: req.body.Superficie,
        Superficie_Recurso: req.body.Superficie_Recurso,
        Elementos: req.body.Elementos,
        Elementos_Recurso: req.body.Elementos_Recurso,
        Observacoes: req.body.Observacoes
    });
}

exports.updateInterReal = (req, res, next) => {
    db.intervencao_realizada.update({
        Estrutura: req.body.Estrutura,
        Estrutura_Recurso: req.body.Estrutura_Recurso,
        Superficie: req.body.Superficie,
        Superficie_Recurso: req.body.Superficie_Recurso,
        Elementos: req.body.Elementos,
        Elementos_Recurso: req.body.Elementos_Recurso,
        Observacoes: req.body.Observacoes
    }, {
        where: req.params.InterRealId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
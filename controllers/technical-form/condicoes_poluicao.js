var db = require('../models/db')

exports.adicionarCondPolu = (req, res) => {
    db.condicoes_poluicao.create({
        Agentes_Poluidores: req.body.Agentes_Poluidores,
        Fontes_Poluicao: req.body.Fontes_Poluicao,
        Resultados: req.body.Resultados
    });
}

exports.updateCondPolu = (req, res, next) => {
    db.condicoes_poluicao.update({
        Agentes_Poluidores: req.body.Agentes_Poluidores,
        Fontes_Poluicao: req.body.Fontes_Poluicao,
        Resultados: req.body.Resultados
    }, {
        where: req.params.CondPoluId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
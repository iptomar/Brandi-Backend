var db = require('../models/db')

exports.adicionarCondIlu = (req, res) => {
    db.condicoes_iluminacao.create({
        Iluminancia_Natural: req.body.Iluminancia_Natural,
        Iluminancia_Artificial: req.body.Iluminancia_Artificial,
        Iluminancia_Natural_Medida: req.body.Iluminancia_Natural_Medida,
        Iluminancia_Artificial_Medida: req.body.Iluminancia_Artificial_Medida,
        Iluminancia_Natural_Real: req.body.Iluminancia_Natural_Real,
        Iluminancia_Artificial_Real: req.body.Iluminancia_Artificial_Real
    });
}

exports.updateCondIlu = (req, res, next) => {
    db.condicoes_iluminacao.update({
        eIluminancia_Natural: req.body.Iluminancia_Natural,
        Iluminancia_Artificial: req.body.Iluminancia_Artificial,
        Iluminancia_Natural_Medida: req.body.Iluminancia_Natural_Medida,
        Iluminancia_Artificial_Medida: req.body.Iluminancia_Artificial_Medida,
        Iluminancia_Natural_Real: req.body.Iluminancia_Natural_Real,
        Iluminancia_Artificial_Real: req.body.Iluminancia_Artificial_Real
    }, {
        where: req.params.CondIluId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
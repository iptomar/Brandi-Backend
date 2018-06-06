var db = require('../models/db')

exports.adicionarDetExam = (req, res) => {
    db.detalhes_exames.create({
        Interpretacao: req.body.Interpretacao,
        Conclusoes: req.body.Conclusoes
    });
}

exports.updateDetExam = (req, res, next) => {
    db.detalhes_exames.update({
        Interpretacao: req.body.Interpretacao,
        Conclusoes: req.body.Conclusoes
    }, {
        where: req.params.DetExamId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
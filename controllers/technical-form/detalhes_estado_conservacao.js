var db = require('../../models/db')

exports.adicionarDetCons = (req, res) => {
    db.detalhes_estado_conservacao.create({
        Estado_Conservacao: req.body.Estado_Conservacao,
        Conclusoes: req.body.Conclusoes
    });
}

exports.updateDetCons = (req, res, next) => {
    db.detalhes_estado_conservacao.update({
        Estado_Conservacao: req.body.Estado_Conservacao,
        Conclusoes: req.body.Conclusoes
    }, {
        where: req.params.DetConsId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
var db = require('../../models/db')

exports.adicionarInter = (req, res) => {
    db.intervencao_proposta.create({
        Preservacao: req.body.Preservacao,
        Conservacao: req.body.Conservacao,
        Restauro: req.body.Restauro
    });
}

exports.updateInter = (req, res, next) => {
    db.intervencao_proposta.update({
        Preservacao: req.body.Preservacao,
        Conservacao: req.body.Conservacao,
        Restauro: req.body.Restauro
    }, {
        where: req.params.InterId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
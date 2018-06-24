var db = require('../../models/db')

exports.adicionarVontade = (req, res) => {
    db.vontade_intervencao_proprietario.create({
        Preservacao: req.body.Preservacao,
        Conservacao: req.body.Conservacao,
        Restauro: req.body.Restauro,
        Aspectos_Especificos: req.body.Aspectos_Especificos
    });
}

exports.updateVontade = (req, res, next) => {
    db.vontade_intervencao_proprietario.update({
        Preservacao: req.body.Preservacao,
        Conservacao: req.body.Conservacao,
        Restauro: req.body.Restauro,
        Aspectos_Especificos: req.body.Aspectos_Especificos
    }, {
        where: req.params.VontadeId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
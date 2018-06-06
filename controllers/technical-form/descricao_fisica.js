var db = require('../models/db')

exports.adicionarDescFis = (req, res) => {
    db.descricao_fisica.create({
        Estrutura_Suporte: req.body.Estrutura_Suporte,
        Superficies: req.body.Superficies,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    });
}

exports.updateDescFis = (req, res, next) => {
    db.descricao_fisica.update({
        Estrutura_Suporte: req.body.Estrutura_Suporte,
        Superficies: req.body.Superficies,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    }, {
        where: req.params.DescFisId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
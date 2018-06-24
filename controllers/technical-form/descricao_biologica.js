var db = require('../../models/db')

exports.adicionarDescBio = (req, res) => {
    db.descricao_biologica.create({
        Estrutura_Suporte: req.body.Estrutura_Suporte,
        Superficies: req.body.Superficies,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    });
}

exports.updateDescBio = (req, res, next) => {
    db.descricao_biologica.update({
        Estrutura_Suporte: req.body.Estrutura_Suporte,
        Superficies: req.body.Superficies,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    }, {
        where: req.params.DescBioId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
var db = require('../../models/db')

exports.adicionarDescMat = (req, res) => {
    db.descricao_material.create({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    });
}

exports.updateDescMat = (req, res, next) => {
    db.descricao_material.update({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    }, {
        where: req.params.DescMatId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
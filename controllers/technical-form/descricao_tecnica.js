var db = require('../../models/db')

exports.adicionarDescTec = (req, res) => {
    db.descricao_tecnica.create({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    });
}

exports.updateDescTec = (req, res, next) => {
    db.descricao_tecnica.update({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios
    }, {
        where: req.params.DescTecId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
var db = require('../../models/db')

exports.adicionarCat = (req, res) => {
    db.categorias.create({
        Super_Categoria: req.body.Super_Categoria,
        Nome: req.body.Nome
    });
}

exports.updateCat = (req, res, next) => {
    db.categorias.update({
        Super_Categoria: req.body.Super_Categoria,
        Nome: req.body.Nome
    }, {
        where: req.params.CatId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
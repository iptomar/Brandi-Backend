var db = require('../models/db')

exports.adicionarCategorias = (req, res) => {
    db.sub_categorias.create({
        Nome: req.body.Nome
    });
}

exports.updateCategorias = (req, res, next) => {
    db.sub_categorias.update({
        Nome: req.body.Nome
    }, {
        where: req.params.CategoriasId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
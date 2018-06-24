var db = require('../../models/db')

exports.adicionarCont = (req, res) => {
    db.contacto.create({
        Contacto_Telefone: req.body.Contacto_Telefone
    });
}

exports.updateCont = (req, res, next) => {
    db.contacto.update({
        Contacto_Telefone: req.body.Contacto_Telefone
    }, {
        where: req.params.ContId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
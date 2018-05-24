var db = require('../models/db')

exports.register = (req, res) => {
    db.Clientes.create({
        email: req.body.email,
        nome: req.body.nome,
        nif: req.body.nif,
        morada: req.body.morada,
        contacto: req.body.contacto
    });
}

exports.updateClient = (req, res, next) => {
    db.Clientes.update({
        email: req.body.email,
        nome: req.body.nome,
        nif: req.body.nif,
        morada: req.body.morada,
        contacto: req.body.contacto
    }, {
        where: req.params.ClienteId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
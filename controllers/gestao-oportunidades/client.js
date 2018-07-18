var db = require('../../models/db')

exports.cliente = (req, res) => {
    db.clientes.find({ where: { id: req.query.id } }).then(
        clientes => res.status(200).json({
            "cliente": clientes
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do cliente" + req.query.id)
};

exports.listar = (req, res) => {  

    db.clientes.findAll().then(
        clientes => res.status(200).json({
            "clientes": clientes
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista enviada")
};

exports.adicionarcliente = (req, res) => {

    db.clientes.create({
        email: req.query.email,
        nome: req.query.nome,
        nif: req.query.nif,
        morada: req.query.morada,
        contacto: req.query.contacto
    }
    )
    console.log("Cliente adicionado")
}

exports.eliminarcliente = (req, res, next) => {

    db.clientes.destroy({
        where: { id: req.query.id }        
    })
    console.log("Cliente apagado")
}

exports.editarcliente = (req, res, next) => {

    db.clientes.update({
        email: req.query.email,
        nome: req.query.nome,
        nif: req.query.nif,
        morada: req.query.morada,
        contacto: req.query.contacto
    }, {
            where: { id: req.query.id }
        }).then(
            (rowsUpdated) => {
                res.json(rowsUpdated)
            }
        ).catch(next)
    console.log("Cliente editado")
}
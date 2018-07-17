var db = require('../../models/db')

exports.cliente = (req, res) => {
    db.Clientes.find({ where: { id: req.query.id } }).then(
        Clientes => res.status(200).json({
            "cliente": Clientes
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do cliente" + req.query.id)
};

exports.listar = (req, res) => {    
    db.Clientes.findAll().then(
        Clientes => res.status(200).json({
            "clientes": Clientes
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista enviada")
};

exports.adicionarcliente = (req, res) => {

    db.Clientes.create({
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

    db.Clientes.destroy({
        where: { id: req.query.id }        
    })
    console.log("Cliente apagado")
}

exports.editarcliente = (req, res, next) => {

    db.Clientes.update({
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
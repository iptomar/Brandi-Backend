var db = require('../../models/db')

exports.listarPedidos = (req, res) => {
    db.pedidos_clientes.findAll().then(
        pedidos_clientes => res.status(200).json({
            "pedidos_clientes": pedidos_clientes
        }),
        error => res = status(500).send(error.message)
    )    
    console.log("Lista Pedidos enviada")
}

exports.pedido = (req, res) => {
    db.pedidos_clientes.find({ where: { id: req.query.id } }).then(
        pedidos_clientes => res.status(200).json({
            "pedido": pedidos_clientes
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do pedido " + req.query.id)
};

exports.EliminarPedido = (req, res, next) => {

    db.pedidos_clientes.destroy({
        where: { id: req.query.id },
    })
    console.log("Pedido apagado " + req.query.id)
}

exports.adicionarpedido = (req, res) => {
    db.pedidos_clientes.create({
        Titulo: req.query.Titulo,
        //Fotografia: req.query.Fotografia,
        Data_Realizacao_Pedido: new Date(),
        Descricao: req.query.Descricao,
        ID_Cliente: req.query.ID_Cliente
    });


}

exports.editarpedido = (req, res, next) => {
    db.pedidos_clientes.update({
        Titulo: req.query.Titulo,
        //Fotografia: req.query.Fotografia,        
        Descricao: req.query.Descricao,        
    }, {
            where: { id: req.query.id }
        }).then(
            (rowsUpdated) => {
                res.json(rowsUpdated)
            }
        ).catch(next)
    console.log("pedido editado" +req.query.id )
}
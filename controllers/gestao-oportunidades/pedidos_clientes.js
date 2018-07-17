var db = require('../../models/db')

exports.listarPedidos = (req, res) => {
    db.Pedidos.findAll().then(
        Pedidos => res.status(200).json({
            "Pedidos": Pedidos
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista Pedidos enviada")
}

exports.pedido = (req, res) => {
    db.Pedidos.find({ where: { id: req.query.id } }).then(
        Pedidos => res.status(200).json({
            "Pedido": Pedidos
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes do cliente " + req.query.id)
};

exports.EliminarPedido = (req, res, next) => {

    db.Pedidos.destroy({
        where: { id: req.query.id },
    })
    console.log("Pedido apagado " + req.query.id)
}

exports.adicionarpedido = (req, res) => {
    db.Pedidos.create({
        Titulo: req.query.Titulo,
        Fotografia: req.query.Fotografia,
        Data_Realizacao_Pedido: new Date(),
        Descricao: req.query.Descricao
    });


}

exports.editarpedido = (req, res, next) => {
    db.Pedidos.update({
        Titulo: req.query.Titulo,
        Fotografia: req.query.Fotografia,
        Data_Realizacao_Pedido: req.query.Data_Realizacao_Pedido,
        Descricao: req.query.Descricao,
        ID_Cliente: req.query.ID_Cliente
    }, {
            where: { id: req.query.id }
        }).then(
            (rowsUpdated) => {
                res.json(rowsUpdated)
            }
        ).catch(next)
    console.log("pedido editado")
}
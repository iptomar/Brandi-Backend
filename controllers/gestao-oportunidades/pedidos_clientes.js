var db = require('../models/db')

exports.adicionarPedClientes = (req, res) => {
    db.pedidos_clientes.create({
        Titulo: req.body.Titulo,
        Fotografia: req.body.Fotografia,
        Data_Realizacao_Pedido: req.body.Data_Realizacao_Pedido,
        Descricao: req.body.Descricao
    });
}

exports.updatePedClientes = (req, res, next) => {
    db.pedidos_clientes.update({
        Titulo: req.body.Titulo,
        Fotografia: req.body.Fotografia,
        Data_Realizacao_Pedido: req.body.Data_Realizacao_Pedido,
        Descricao: req.body.Descricao
    }, {
        where: req.params.PedClientesId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
'use strict';

module.exports = function (sequelize, DataTypes) {
    var pedidos_clientes = sequelize.define('pedidos_clientes', {
        Titulo: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        Fotografia: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Data_Realizacao_Pedido: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ID_Cliente: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'clientes',
                key: 'id'
            }
        }
    }, {
            tableName: 'pedidos_clientes'
        });
    pedidos_clientes.associate = (models) => {
    }
    return pedidos_clientes;
};

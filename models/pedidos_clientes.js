'use strict';

module.exports = function (sequelize, DataTypes) {
    var pedidos_clientes = sequelize.define('pedidos_clientes', {       
        Titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Fotografia: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Data_Realizacao_Pedido: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        ID_Cliente: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'clientes',
                key: 'id'
            }
        }
    }, {
            tableName: 'pedidos_clientes'
        });
        pedidos_clientes.associate = (models) => {
            //models.Designacao_Objeto.belongsTo(models.Role)
        }
        return pedidos_clientes;
};

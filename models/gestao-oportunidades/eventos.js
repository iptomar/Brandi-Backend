'use strict';

module.exports = function (sequelize, DataTypes) {

    var eventos = sequelize.define('eventos', {
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Data_Evento: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Tipo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ID_Pedido: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'pedidos_clientes',
                key: 'id'
            }
        }
    }

    );
    eventos.associate = (models) => {
    }
    return eventos;
};
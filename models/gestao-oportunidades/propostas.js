'use strict';

module.exports = function (sequelize, DataTypes) {
    var propostas = sequelize.define('propostas', {
        Aceitação_Proposta: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        Justificacao_Recusa: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Data_Elaboracao_Proposta: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Data_Envio_Proposta: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        ID_Pedido: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'pedidos_clientes',
                key: 'id'
            }
        },
        ID_Coordenador: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    propostas.associate = (models) => {
    }
    return propostas;
};
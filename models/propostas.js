'use strict';

module.exports = function (sequelize, DataTypes) {
    var propostas = sequelize.define('propostas', {
        Aceitação_Proposta: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        Justificacao_Recusa: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Data_Elaboracao_Proposta: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Data_Envio_Proposta: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        ID_Pedido: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'pedidos_clientes',
                key: 'id'
            }
        },
        ID_Coordenador: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    propostas.associate = (models) => {
        // models.propostas.belongsTo(models.Role)
    }
    return propostas;
};
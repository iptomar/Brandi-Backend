/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('propostas', {
        ID_Proposta: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
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
            type: DataType.DATEONLY,
            allowNull: false
        },
        Data_Envio_Proposta: {
            type: DataType.DATEONLY,
            allowNull: false
        },
        ID_Pedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'pedidos_clientes',
                key: 'id_pedido'
            }
        },
        ID_Coordenador: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'coordenadores',
                key: 'id_coordenador'
            }
        }
    }, {
            tableName: 'propostas'
        });
};
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('pedidos_clientes', {
        ID_Pedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
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
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'clientes',
                key: 'id_cliente'
            }
        }
    }, {
            tableName: 'pedidos_clientes'
        });
};

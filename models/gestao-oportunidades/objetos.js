/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('objetos', {
        ID_Objeto: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        Designacao: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ProcessoLCRM: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
		ProcessoCEARC: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
		Coordenacao: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Data_Abertura_Processo: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
		Data_Entrada_LCRM: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
		Data_Entrada_CEARC: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
		ID_Sub_Categoria: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
		Tipologia: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
		Localizacao: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
		Dimensao: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
		
        ID_Dono_Obra: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
		
		ID_Proprietario: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
		
		ID_Mecenas: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
		
        ID_Pedido: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'pedidos_clientes',
                key: 'id_pedido'
            }
        }
    }, {
            tableName: 'objetos'
        });
};

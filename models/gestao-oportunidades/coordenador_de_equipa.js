/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('coordenador_de_equipa', {
        ID_Coordenador: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        Nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Fotografia: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
		E_Mail: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
		NIF: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        Contacto: {
            type: DataTypes.STRING(9),
            allowNull: false
        }			
    }, {
            tableName: 'coordenador_de_equipa'
        });
};

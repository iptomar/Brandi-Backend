/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('eventos', {
        Descricao: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Data_Evento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Tipo: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
            tableName: 'eventos'
        });
};
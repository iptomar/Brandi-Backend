'use strict';
module.exports = (sequelize, DataTypes) => {
    var Designacao_Objeto = sequelize.define('Designacao_Objeto', {
        designacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipologia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localizacao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Designacao_Objeto.associate = (models) => {
        //models.Designacao_Objeto.belongsTo(models.Role)
    }
    return Designacao_Objeto;
}

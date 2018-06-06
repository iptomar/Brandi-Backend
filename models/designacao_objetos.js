'use strict';
module.exports = (sequelize, DataTypes) => {
    var designacao_objetos = sequelize.define('designacao_objetos', {
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
    designacao_objetos.associate = (models) => {
        //models.Designacao_Objeto.belongsTo(models.Role)
    }
    return designacao_objetos;
}

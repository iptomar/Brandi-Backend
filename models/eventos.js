'use strict';

module.exports = function (sequelize, DataTypes) {
    var eventos =  sequelize.define('eventos', {
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
        }   });    
        eventos.associate = (models) => {
            //models.Designacao_Objeto.belongsTo(models.Role)
        }
        return eventos;
};
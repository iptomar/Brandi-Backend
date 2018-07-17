'use strict';
module.exports = function(sequelize, DataTypes) {
  
  var objetivoG = sequelize.define('objectivos_gerais_usados', {
    ID_Objectivo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'objectivos_gerais',
        key: 'id'
      }
    },
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false, 
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    }
  }, {
    tableName: 'objectivos_gerais_usados'
    });
  objetivoG.associate = (models) => {

  }
  return objetivoG;
};

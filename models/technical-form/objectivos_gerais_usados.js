'use strict';
module.exports = function(sequelize, DataTypes) {
  var objetivoG = sequelize.define('objectivos_gerais_usados', {
    ID_Objectivo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'objectivos_gerais',
        key: 'ID_Objectivo'
      }
    },
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'ID_Objecto'
      }
    }
  }, {
    tableName: 'objectivos_gerais_usados'
    });
  objetivoG.associate = (models) => {

  }
  return objetivoG;
};

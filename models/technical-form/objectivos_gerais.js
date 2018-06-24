'use strict';
module.exports = function(sequelize, DataTypes) {
  var objetivos = sequelize.define('objectivos_gerais', {
    ID_Objectivo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'objectivos_gerais'
    });
  objetivos.associate = (models) => {

  }
  return objetivos;
};

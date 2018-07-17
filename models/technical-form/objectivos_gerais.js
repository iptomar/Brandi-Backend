'use strict';
module.exports = function(sequelize, DataTypes) {
  var objetivos = sequelize.define('objectivos_gerais', {    
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

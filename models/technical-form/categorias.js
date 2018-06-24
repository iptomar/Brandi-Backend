'use strict';
module.exports = function(sequelize, DataTypes) {
  var categorias = sequelize.define('categorias', {
    ID_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Super_Categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'Bens Culturais',
      unique: true
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'categorias'
    });
  categorias.associate = (models) => {
    
  }
  return categorias;
};

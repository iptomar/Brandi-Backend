'use strict';
module.exports = function(sequelize, DataTypes) {
  var categorias = sequelize.define('categorias', {  
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

'use strict';
module.exports = function(sequelize, DataTypes) {
  var subcat = sequelize.define('sub_categorias', {
    ID_Categoria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'categorias',
        key: 'id'
      }
    },    
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'sub_categorias'
    });
  subcat.associate = (models) => {

  }
  return subcat;
};

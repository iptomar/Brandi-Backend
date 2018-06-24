'use strict';
module.exports = function(sequelize, DataTypes) {
  var subcat = sequelize.define('sub_categorias', {
    ID_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categorias',
        key: 'ID_Categoria'
      }
    },
    ID_Sub_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
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

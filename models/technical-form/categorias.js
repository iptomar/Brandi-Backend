/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    ID_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
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
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_categorias', {
    ID_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categorias',
        key: 'id_categoria'
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
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentacao', {
    ID_Documentacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Tipo_Documentacao: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'documentacao'
  });
};

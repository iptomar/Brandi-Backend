/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalhes_exames', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Interpretacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Conclusoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'detalhes_exames'
  });
};

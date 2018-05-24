/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intervencao_proposta', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Preservacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Conservacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Restauro: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'intervencao_proposta'
  });
};

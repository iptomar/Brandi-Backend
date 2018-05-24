/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objecto_equipa', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    ID_Membro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'membro_equipa',
        key: 'id_membro'
      }
    }
  }, {
    tableName: 'objecto_equipa'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objectivos_gerais_usados', {
    ID_Objectivo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'objectivos_gerais',
        key: 'id_objectivo'
      }
    },
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    }
  }, {
    tableName: 'objectivos_gerais_usados'
  });
};

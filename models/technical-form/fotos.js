/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fotos', {
    ID_Foto: {
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
    Foto_URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'fotos'
  });
};

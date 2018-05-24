/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descricao_material', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Estrutura: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Superficie: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'descricao_material'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descricao_biologica', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Estrutura_Suporte: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficies: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'descricao_biologica'
  });
};

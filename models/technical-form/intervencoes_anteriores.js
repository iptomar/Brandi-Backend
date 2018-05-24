/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intervencoes_anteriores', {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'intervencoes_anteriores'
  });
};

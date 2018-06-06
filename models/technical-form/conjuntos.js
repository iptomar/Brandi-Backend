/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conjuntos', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Tipo_Conjunto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Conjunto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Assinatura_Autoria: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Inscricoes_Montagem_Elementos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Inscricoes_Construcao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'conjuntos'
  });
};

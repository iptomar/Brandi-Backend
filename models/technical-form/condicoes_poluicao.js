/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condicoes_poluicao', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Agentes_Poluidores: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Fontes_Poluicao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Resultados: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'condicoes_poluicao'
  });
};

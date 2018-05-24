/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condicoes_iluminacao', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Iluminancia_Natural: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Iluminancia_Artificial: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Iluminancia_Natural_Medida: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Iluminancia_Artificial_Medida: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Iluminancia_Natural_Real: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Iluminancia_Artificial_Real: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'condicoes_iluminacao'
  });
};

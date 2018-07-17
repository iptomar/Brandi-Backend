'use strict';
module.exports = function(sequelize, DataTypes) {
  var detalhes = sequelize.define('detalhes_estado_conservacao', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Estado_Conservacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Conclusoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'detalhes_estado_conservacao'
    });
  detalhes.associate = (models) => {

  }
  return detalhes;
};

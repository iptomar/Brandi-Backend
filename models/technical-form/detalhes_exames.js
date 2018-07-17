'use strict';
module.exports = function(sequelize, DataTypes) {
  var detalhesE =  sequelize.define('detalhes_exames', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Interpretacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Conclusoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'detalhes_exames'
    });
  detalhesE.associate = (models) => {

  }
  return detalhesE;
};

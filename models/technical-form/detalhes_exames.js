'use strict';
module.exports = function(sequelize, DataTypes) {
  var detalhesE =  sequelize.define('detalhes_exames', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'designacao_objecto',
        key: 'ID_Objecto'
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

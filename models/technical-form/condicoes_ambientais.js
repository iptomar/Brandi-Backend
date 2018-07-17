'use strict';
module.exports = function(sequelize, DataTypes) {
  var condicoes = sequelize.define('condicoes_ambientais', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Temperatura_Humido: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Temperatura_Seco: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Periodo_Humido: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Periodo_Seco: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'condicoes_ambientais'
    });
  condicoes.associate = (models) => {

  }
  return condicoes;
};

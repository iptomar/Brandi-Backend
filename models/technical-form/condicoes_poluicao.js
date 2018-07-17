'use strict';
module.exports = function(sequelize, DataTypes) {
  var condicoesp = sequelize.define('condicoes_poluicao', {
    
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
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
  condicoesp.associate = (models) => {

  }
  return condicoesp
};

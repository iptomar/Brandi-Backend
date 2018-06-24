'use strict';
module.exports = function(sequelize, DataTypes) {
  var intervencaoR = sequelize.define('intervencao_realizada', {
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
    Estrutura: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Estrutura_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficie_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'intervencao_realizada'
    });
  intervencaoR.associate = (models) => {

  }
  return intervencaoR;
};

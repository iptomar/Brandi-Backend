'use strict';
module.exports = function(sequelize, DataTypes) {
  var intervencaoA = sequelize.define('intervencoes_anteriores', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
     
      references: {
        model: 'designacao_objecto',
        key: 'id'
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
  intervencaoA.associate = (models) => {

  }
  return intervencaoA;
};

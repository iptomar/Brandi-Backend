'use strict';
module.exports = function(sequelize, DataTypes) {
  var intervencaoA = sequelize.define('intervencoes_anteriores', {
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

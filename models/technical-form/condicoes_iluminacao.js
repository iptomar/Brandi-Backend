'use strict';
module.exports = function(sequelize, DataTypes) {
  var condicoesi = sequelize.define('condicoes_iluminacao', {
    
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'designacao_objecto',
        key: 'id'
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
  condicoesi.associate = (models) => {

  }
  return condicoesi;
};

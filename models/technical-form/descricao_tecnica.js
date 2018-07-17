'use strict';
module.exports = function(sequelize, DataTypes) {
  var descricaot = sequelize.define('descricao_tecnica', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Estrutura: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Superficie: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'descricao_tecnica'
    });
  descricaot.associate = (models) => {

  }
  return descricaot;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var descricaob = sequelize.define('descricao_biologica', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Estrutura_Suporte: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficies: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'descricao_biologica'
    });
  descricaob.associate = (models) => {

  }
  return descricaob;
};

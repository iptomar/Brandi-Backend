'use strict';
module.exports = function(sequelize, DataTypes) {
  var intervencao = sequelize.define('intervencao_proposta', {
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
    Preservacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Conservacao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Restauro: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'intervencao_proposta'
    });
  intervencao.associate = (models) => {

  }
  return intervencao;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var pessoa = sequelize.define('pessoa', {
    ID_Pessoa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Endereco_Postal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'pessoa'
    });
  pessoa.associate = (models) => {

  }
  return pessoa;
};

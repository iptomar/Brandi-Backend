'use strict';
module.exports = function(sequelize, DataTypes) {
  var membro = sequelize.define('membro_equipa', {
    ID_Membro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Funcao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Habilitacoes_Nivel_Profissional: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'membro_equipa'
    });
  membro.associate = (models) => {

  }
  return membro;
};

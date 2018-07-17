'use strict';
module.exports = function(sequelize, DataTypes) {
  var membro = sequelize.define('membro_equipa', {
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

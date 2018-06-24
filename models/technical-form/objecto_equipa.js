'use strict';
module.exports = function(sequelize, DataTypes) {
  var objetivoE = sequelize.define('objecto_equipa', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'ID_Objecto'
      }
    },
    ID_Membro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'membro_equipa',
        key: 'id_membro'
      }
    }
  }, {
    tableName: 'objecto_equipa'
    });
  objetivoE.associate = (models) => {

  }
  return objetivoE;
};

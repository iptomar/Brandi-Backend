'use strict';
module.exports = function(sequelize, DataTypes) {
  var objetivoE = sequelize.define('objecto_equipa', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    ID_Membro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      
      references: {
        model: 'membro_equipa',
        key: 'id'
      }
    }
  }, {
    tableName: 'objecto_equipa'
    });
  objetivoE.associate = (models) => {

  }
  return objetivoE;
};

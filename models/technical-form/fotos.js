'use strict';
module.exports = function(sequelize, DataTypes) {
  var fotos = sequelize.define('fotos', {   
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Foto_URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'fotos'
    });
  fotos.associate = (models) => {

  }
  return fotos;
};

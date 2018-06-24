'use strict';
module.exports = function(sequelize, DataTypes) {
  var fotos = sequelize.define('fotos', {
    ID_Foto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'ID_Objecto'
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

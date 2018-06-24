'use strict';
module.exports = function(sequelize, DataTypes) {
  var vontade = sequelize.define('vontade_intervencao_proprietario', {
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
    },
    Aspectos_Especificos: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'vontade_intervencao_proprietario'
    });
  vontade.associate = (models) => {

  }
  return vontade;
};

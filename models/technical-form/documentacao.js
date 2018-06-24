'use strict';
module.exports = function(sequelize, DataTypes) {
  var documentacao = sequelize.define('documentacao', {
    ID_Documentacao: {
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
    Tipo_Documentacao: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'documentacao'
    });
  documentacao.associate = (models) => {

  }
  return documentacao;
};

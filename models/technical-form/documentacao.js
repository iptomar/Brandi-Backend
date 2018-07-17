'use strict';
module.exports = function(sequelize, DataTypes) {
  var documentacao = sequelize.define('documentacao', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
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

'use strict';
module.exports = function(sequelize, DataTypes) {
  var conjuntos = sequelize.define('conjuntos', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    Tipo_Conjunto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Conjunto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Acessorios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Assinatura_Autoria: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Inscricoes_Montagem_Elementos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Inscricoes_Construcao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'conjuntos'
    });
  conjuntos.associate = (models) => {

  }
  return conjuntos
};

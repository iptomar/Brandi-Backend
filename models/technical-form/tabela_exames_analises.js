'use strict';
module.exports = function(sequelize, DataTypes) {
  var tabelaE = sequelize.define('tabela_exames_analises', {
    ID_Objecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'designacao_objecto',
        key: 'id'
      }
    },
    ID_Entrada_Tabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Localizacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Objectivos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Resultados: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Entidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'tabela_exames_analises'
    });
  tabelaE.associate = (models) => {

  }
  return tabelaE;
};

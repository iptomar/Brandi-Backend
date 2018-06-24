'use strict';
module.exports = function(sequelize, DataTypes) {
  var designacaoO = sequelize.define('designacao_objecto', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Designacao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ProcessoLCRM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProcessoCEARC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Coordenacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Data_Abertura_Processo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Data_Entrada_LCRM: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Data_Entrada_CEARC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ID_Sub_Categoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'sub_categorias',
        key: 'ID_Sub_Categoria'
      }
    },
    Tipologia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Localizacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Dimensao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_Dono_Obra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'ID_Pessoa'
      }
    },
    ID_Proprietario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'ID_Pessoa'
      }
    },
    ID_Mecenas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'ID_Pessoa'
      }
    }
  }, {
    tableName: 'designacao_objecto'
    });
  designacaoO.associate = (models) => {

  }
  return designacaoO;
};

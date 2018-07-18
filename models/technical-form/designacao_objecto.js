'use strict';
module.exports = function(sequelize, DataTypes) {
  var designacaoO = sequelize.define('designacao_objecto', {   
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sub_categorias',
        key: 'id'
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'id'
      }
    },
    ID_Proprietario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
      ID_Pedido: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'pedidos_clientes',
          key: 'id'    
        }          
    },
    ID_Mecenas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'id'
      },
    }
  }, {
    tableName: 'designacao_objecto'
    });
  designacaoO.associate = (models) => {

  }
  return designacaoO;
};

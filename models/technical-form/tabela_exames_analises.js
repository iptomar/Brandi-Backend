/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_exames_analises', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
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
};

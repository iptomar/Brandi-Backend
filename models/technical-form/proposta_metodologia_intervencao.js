/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposta_metodologia_intervencao', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Estrutura: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Estrutura_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Superficie_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elementos_Recurso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Data_Informacao_Proposta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Data_Aceitacao_Proposta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'proposta_metodologia_intervencao'
  });
};

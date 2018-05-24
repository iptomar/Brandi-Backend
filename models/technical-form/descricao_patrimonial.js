/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descricao_patrimonial', {
    ID_Objecto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'designacao_objecto',
        key: 'id_objecto'
      }
    },
    Classificacao: {
      type: DataTypes.ENUM('Mundial','Internacional','Nacional','Regional','Local'),
      allowNull: true
    },
    Epoca: {
      type: DataTypes.ENUM('Coevo','Tardio','Réplica','Reprodução','Falsificação'),
      allowNull: true
    },
    Qualidade: {
      type: DataTypes.ENUM('Excelente','Muito Boa','Boa','Regular','Fraca'),
      allowNull: true
    },
    Breve_Descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Analogias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Conclusoes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Oficina: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Datacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Local_Origem: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'descricao_patrimonial'
  });
};

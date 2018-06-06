/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacto', {
    ID_Contacto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ID_Pessoa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'id_pessoa'
      }
    },
    Contacto_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'contacto'
  });
};

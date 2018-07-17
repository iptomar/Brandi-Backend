'use strict';
module.exports = function(sequelize, DataTypes) {
  var contacto = sequelize.define('contacto', {
    ID_Pessoa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,      
      references: {
        model: 'pessoa',
        key: 'id'
      }
    },
    Contacto_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'contacto'
    });
  contacto.associate = (models) => {

  }
  return contacto
};

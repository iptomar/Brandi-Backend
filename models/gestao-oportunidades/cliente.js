'use strict';
module.exports = (sequelize, DataTypes) => {
    var Clientes = sequelize.define('Clientes', {
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        nome: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        nif: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        morada: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Clientes.associate = (models) => {        
    }
    return Clientes;
}

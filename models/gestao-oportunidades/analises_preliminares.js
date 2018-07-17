'use strict';

module.exports = function (sequelize, DataTypes) {

    var analises = sequelize.define('analises_preliminares', {
        Descricao_Analise: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Data_Realizacao_Analise: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Locao_realizacao_Analise: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Inicio_Analise: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Fim_Analise: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Tipo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Distancia_Deslocacao: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Outras_Despesas: {
            type: DataTypes.STRING(255),
            allowNull: true
        }, 
        ID_Objecto: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: '../technical-form/designacao_objecto',
                key: 'id'
            }
        }
    });
    analises.associate = (models) => {
    }
    return analises;
};
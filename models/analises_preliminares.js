'use strict';

module.exports = function (sequelize, DataTypes) {
    var analises_preliminares = sequelize.define('analises_preliminares', {
        Descricao_Analise: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Data_Realizacao_Analise: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Locao_realizacao_Analise: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Inicio_Analise: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Fim_Analise: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Tipo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Distancia_Deslocacao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Outras_Despesas: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });

    analises_preliminares.associate = (models) => {
        //models.Designacao_Objeto.belongsTo(models.Role)
    }
    return analises_preliminares;
};
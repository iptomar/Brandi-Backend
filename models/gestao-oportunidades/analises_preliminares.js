/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('analises_preliminares', {
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
    }, {
            tableName: 'analises_preliminares'
        });
};
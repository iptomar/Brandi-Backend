'use strict';
module.exports = (sequelize, DataTypes) => {
	var designacao_objetos = sequelize.define("designacao_objetos", {
		designacao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		processolcrm: {
			type: DataTypes.STRING,
			allowNull: false
		},
		processolcearc: {
			type: DataTypes.STRING,
			allowNull: false
		},
		coordenacao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		data_abertura_projeto: {
			type: DataTypes.DATE,
			allowNull: false
		},
		data_entrada_lcrm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		data_entrada_cearc: {
			type: DataTypes.DATE,
			allowNull: false
		},
		id_sub_categoria: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tipologia: {
			type: DataTypes.STRING,
			allowNull: false
		},
		localizacao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dimensao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		id_dono_obra: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_proprietario: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_mecenas: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});
	designacao_objetos.associate = (models) => {
		//models.designacao_objetos.belongsTo(models.pedidosCliente)
	};
	return designacao_objetos;
};

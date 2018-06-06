'use strict';
module.exports = (sequelize, DataTypes) => {
	var Role = sequelize.define("Roles", {
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	});
	Role.associate=(models)=>{
		models.Role.hasMany(models.User);
	};
	return Role;
};

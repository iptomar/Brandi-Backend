"use strict";
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define("Users", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			unique: false
		}
	});
	User.associate = (models) => {
		models.User.belongsTo(models.Role);
	};
	return User;
};
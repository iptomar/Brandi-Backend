var db = require("../models/db");

exports.register = (req, res) => {
	db.Clientes.create({
		email: req.body.email,
		nome: req.body.nome,
		nif: req.body.nif,
		morada: req.body.morada,
		contacto: req.body.contacto
	}).then(
		client => res.status(200).send(client),
		error => res.status(500).send(error)
	);
};

exports.updateClient = (req, res, next) => {
	db.Clientes.update({
		email: req.body.email,
		nome: req.body.nome,
		nif: req.body.nif,
		morada: req.body.morada,
		contacto: req.body.contacto
	}, {
		where: req.params.email
	}).then(
		(rowsUpdated) => {
			res.json(rowsUpdated);
		}
	).catch(next);
};
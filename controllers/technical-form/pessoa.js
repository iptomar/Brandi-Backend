var db = require('../models/db')

exports.adicionarPessoa = (req, res) => {
    db.pessoa.create({
        Nome: req.body.Nome,
        Endereco_Postal: req.body.Endereco_Postal,
        Email: req.body.Email
    });
}

exports.updatePessoa = (req, res, next) => {
    db.pessoa.update({
        Nome: req.body.Nome,
        Endereco_Postal: req.body.Endereco_Postal,
        Email: req.body.Email
    }, {
        where: req.params.PessoaId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
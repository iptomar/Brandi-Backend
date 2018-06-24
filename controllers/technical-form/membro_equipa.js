var db = require('../../models/db')

exports.adicionarMembro = (req, res) => {
    db.membro_equipa.create({
        Funcao: req.body.Funcao,
        Habilitacoes_Nivel_Profissional: req.body.Habilitacoes_Nivel_Profissional
    });
}

exports.updateMembro = (req, res, next) => {
    db.membro_equipa.update({
        Funcao: req.body.Funcao,
        Habilitacoes_Nivel_Profissional: req.body.Habilitacoes_Nivel_Profissional
    }, {
        where: req.params.MembroId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
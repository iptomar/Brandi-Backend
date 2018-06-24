var db = require('../../models/db')

exports.adicionarInterAnt = (req, res) => {
    db.intervencoes_anteriores.create({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios,
        Observacoes: req.body.Observacoes
    });
}

exports.updateInterAnt = (req, res, next) => {
    db.intervencoes_anteriores.update({
        Estrutura: req.body.Estrutura,
        Superficie: req.body.Superficie,
        Elementos_Acessorios: req.body.Elementos_Acessorios,
        Observacoes: req.body.Observacoes
    }, {
        where: req.params.InterAntId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
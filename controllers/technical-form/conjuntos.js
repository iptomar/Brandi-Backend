var db = require('../models/db')

exports.adicionarConj = (req, res) => {
    db.conjuntos.create({
        Tipo_Conjunto: req.body.Tipo_Conjunto,
        Elementos_Conjunto: req.body.Elementos_Conjunto,
        Elementos_Acessorios: req.body.Elementos_Acessorios,
        Assinatura_Autoria: req.body.Assinatura_Autoria,
        Inscricoes_Montagem_Elementos: req.body.Inscricoes_Montagem_Elementos,
        Inscricoes_Construcao: req.body.Inscricoes_Construcao
    });
}

exports.updateConj = (req, res, next) => {
    db.conjuntos.update({
        Tipo_Conjunto: req.body.Tipo_Conjunto,
        Elementos_Conjunto: req.body.Elementos_Conjunto,
        Elementos_Acessorios: req.body.Elementos_Acessorios,
        Assinatura_Autoria: req.body.Assinatura_Autoria,
        Inscricoes_Montagem_Elementos: req.body.Inscricoes_Montagem_Elementos,
        Inscricoes_Construcao: req.body.Inscricoes_Construcao
    }, {
        where: req.params.ConjId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
var db = require('../../models/db')

exports.adicionarDescPat = (req, res) => {
    db.descricao_patrimonial.create({
        Classificacao: req.body.Classificacao,
        Epoca: req.body.Epoca,
        Qualidade: req.body.Qualidade,
        Breve_Descricao: req.body.Breve_Descricao,
        Analogias: req.body.Analogias,
        Conclusoes: req.body.Conclusoes,
        Oficina: req.body.Oficina,
        Datacao: req.body.Datacao,
        Local_Origem: req.body.Local_Origem
    });
}

exports.updateDescPat = (req, res, next) => {
    db.descricao_patrimonial.update({
        Classificacao: req.body.Classificacao,
        Epoca: req.body.Epoca,
        Qualidade: req.body.Qualidade,
        Breve_Descricao: req.body.Breve_Descricao,
        Analogias: req.body.Analogias,
        Conclusoes: req.body.Conclusoes,
        Oficina: req.body.Oficina,
        Datacao: req.body.Datacao,
        Local_Origem: req.body.Local_Origem
    }, {
        where: req.params.DescPatId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
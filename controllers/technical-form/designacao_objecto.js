var db = require('../models/db')

exports.adicionarDesObj = (req, res) => {
    db.designacao_objecto.create({
        Designacao: req.body.Designacao,
        ProcessoLCRM: req.body.ProcessoLCRM,
        ProcessoCEARC: req.body.ProcessoCEARC,
        Coordenacao: req.body.Coordenacao,
        Data_Abertura_Processo: req.body.Data_Abertura_Processo,
        Data_Entrada_LCRM: req.body.Data_Entrada_LCRM,
        Data_Entrada_CEARC: req.body.Data_Entrada_CEARC,
        Tipologia: req.body.Tipologia,
        Localizacao: req.body.Localizacao,
        Dimensao: req.body.Dimensao
    });
}

exports.updateDesObj = (req, res, next) => {
    db.designacao_objecto.update({
        Designacao: req.body.Designacao,
        ProcessoLCRM: req.body.ProcessoLCRM,
        ProcessoCEARC: req.body.ProcessoCEARC,
        Coordenacao: req.body.Coordenacao,
        Data_Abertura_Processo: req.body.Data_Abertura_Processo,
        Data_Entrada_LCRM: req.body.Data_Entrada_LCRM,
        Data_Entrada_CEARC: req.body.Data_Entrada_CEARC,
        Tipologia: req.body.Tipologia,
        Localizacao: req.body.Localizacao,
        Dimensao: req.body.Dimensao
    }, {
        where: req.params.DesObjId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}
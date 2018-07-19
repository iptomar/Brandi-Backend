var db = require('../../models/db')

exports.listaranalises = (req, res) => {
    db.analises_preliminares.findAll().then(
        analises_preliminares => res.status(200).json({
            "analises_preliminares": analises_preliminares
        }),
        error => res = status(500).send(error.message)
    )
    console.log("Lista de analises enviada")
}

exports.analise = (req, res) => {
    db.analises_preliminares.find({ where: { id: req.query.id } }).then(
        analises_preliminares => res.status(200).json({
            "analise": analises_preliminares
        }),
        error => res = status(500).send(error.message)
    )
    console.log("detalhes da analise " + req.query.id)
};

exports.EliminarAnalise = (req, res, next) => {

    db.analises_preliminares.destroy({
        where: { id: req.query.id },
    })
    console.log("Analise apagada " + req.query.id)
}


exports.adicionaranalise = (req, res) => {
    console.log("Analise adicionada ")
    db.analises_preliminares.create({        
        Descricao_Analise: req.query.Descricao_Analise,
        Data_Realizacao_Analise: new Date(),//req.query.Locao_realizacao_Analise,
        Locao_realizacao_Analise: req.query.Locao_realizacao_Analise,
        Inicio_Analise: req.query.Inicio_Analise,
        Fim_Analise: req.query.Fim_Analise,
        Distancia_Deslocacao: req.query.Distancia_Deslocacao,
        Outras_Despesas: req.query.Outras_Despesas,
        ID_Objecto: req.query.ID_Objecto
    });
}

exports.editarAnalise = (req, res, next) => {
   
    db.analises_preliminares.update({
        Descricao_Analise: req.query.Descricao_Analise,
        //Data_Realizacao_Analise: req.query.Data_Realizacao_Analise,
        Locao_realizacao_Analise: req.query.Locao_realizacao_Analise,
        //Inicio_Analise: req.query.Inicio_Analise,
        //Fim_Analise: req.query.Fim_Analise,        
        Distancia_Deslocacao: req.query.Distancia_Deslocacao,
        Outras_Despesas: req.query.Outras_Despesas
    }, {
        where: {id : req.query.id}
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
    console.log("Analise editada "+ req.query.id)
}
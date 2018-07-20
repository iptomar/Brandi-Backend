var db = require('../../models/db')


exports.adicionapagina1 = (req, res) => {

    db.designacao_objecto.create({
        Designacao: req.query.Designacao,
        ProcessoLCRM: req.query.ProcessoLCRM,
        ProcessoCEARC: req.query.ProcessoCEARC,
        Coordenacao: req.query.Coordenacao,
        // Data_Abertura_Processo: req.query.Data_Abertura_Processo,
        // Data_Entrada_LCRM: req.query.Data_Entrada_LCRM,
        // Data_Entrada_CEARC: req.query.Data_Entrada_CEARC,
        Tipologia: req.query.Tipologia,
        Localizacao: req.query.Localizacao,
        Dimensao: req.query.Dimensao,
        ID_Proprietario: 1
    });
    console.log("objeto criado")
    /* db.fotos.create({
         Foto_URL: req.query.Foto_URL,
         Referencia: req.query.Referencia
     });
 
     db.categorias.create({
         Super_Categoria: req.query.Super_Categoria,
         Nome: req.query.Nome
     });
     
     db.sub_categorias.create({
         Nome: req.query.Nome
     });
 
     db.pessoa.create({
         Nome: req.query.Nome,
         Endereco_Postal: req.query.Endereco_Postal,
         Email: req.query.Email
     });*/
}
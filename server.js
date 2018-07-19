const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/user');
const http = require("http");
var controllers = require("./controllers/index");

var Server = function () {
  this.app = express();
  this.server = http.createServer();
  this.middleware();
  this.routes();
  this.server.on("request", this.app);
};

Server.prototype.start = function (port) {
  this.port = port;
  this.server.listen(this.port, () => console.log('PSI - app listening on port: ', port))
};

Server.prototype.middleware = function () {
  this.app.use(bodyParser.urlencoded({
    extended: true
  }));
  this.app.use(bodyParser.json());
  this.app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Credentials', true);

    console.log("\x1b[36m" + req.method, req.url + "\x1b[0m");

    if (req.method === "OPTIONS") {
      return res.send(200);
    }

    if (req.headers.authorization) {
      user.validateToken(req.headers.authorization).then(
        client => {
          if (client) req.user = client;
          else req.user = null;
          next();
        },
        error => {
          req.user = null;
          next();
        });
    } else {
      req.user = null;
      next();
    }
  });
};

Server.prototype.routes = function () {
  this.app
    .use('/', express.static('public'))
    .post("/registar", this.permission("Gestor"), controllers.user.register)
    .post("/login", controllers.user.login)
    .get("/user", controllers.user.getClient)
   // .post("/adicionar", this.permission(["Tecnico", "Gestor"]), controllers.designacao_objetos.adicionar)
   // .get("/listar", this.permission("DiretorTecnico"), controllers.designacao_objetos.listar)
    .get("/roles", this.permission("Gestor"), controllers.role.list)

    .post("/cliente", this.permission("Gestor"), controllers.client.cliente)
    .post("/listarclientes", this.permission("Gestor"), controllers.client.listar) // listar de clientes
    .post("/editarcliente", this.permission("Gestor"), controllers.client.editarcliente) // editar um cliente
    .post("/adicionarcliente", this.permission("Gestor"), controllers.client.adicionarcliente) // adicionar um cliente
    .post("/eliminarcliente", this.permission("Gestor"), controllers.client.eliminarcliente) // eliminar um cliente

    .post("/listarpedidos", this.permission("Gestor"), controllers.pedidos_clientes.listarPedidos) // listar de pedidos
    .post("/pedido", this.permission("Gestor"), controllers.pedidos_clientes.pedido) // listar um pedido
    .post("/eliminarpedido", this.permission("Gestor"), controllers.pedidos_clientes.EliminarPedido) // eliminar um pedidos
    .post("/editarpedido", this.permission("Gestor"), controllers.pedidos_clientes.editarpedido) // editar um cliente
    .post("/adicionarpedido", this.permission("Gestor"), controllers.pedidos_clientes.adicionarpedido)  // adicionar pedido      

    .post("/listareventos", this.permission("Gestor"), controllers.eventos.listareventos) // listar eventos
    .post("/evento", this.permission("Gestor"), controllers.eventos.evento) // listar um evento
    .post("/eliminarevento", this.permission("Gestor"), controllers.eventos.eliminarevento) // eliminar um evento
    .post("/editarevento", this.permission("Gestor"), controllers.eventos.editarevento) // editar um evento
    .post("/adicionarevento", this.permission("Gestor"), controllers.eventos.adicionarevento)  // adicionar evento

    .post("/listaranalises", this.permission("Gestor"), controllers.analises_preliminares.listaranalises) // listar analises_preliminar
    .post("/analise", this.permission("Gestor"), controllers.analises_preliminares.analise) // listar analises_preliminar
    .post("/eliminaranalise", this.permission("Gestor"), controllers.analises_preliminares.EliminarAnalise) // eliminar uma analises_preliminar
    .post("/editaranalise", this.permission("Gestor"), controllers.analises_preliminares.editarAnalise) // editar uma analises_preliminar
    .post("/adicionaranalise", this.permission("Gestor"), controllers.analises_preliminares.adicionaranalise)  // adicionar uma analises_preliminar
    
    .post("/proposta", this.permission("Gestor"), controllers.propostas.proposta) // listar proposta
    .post("/listarPropostas", this.permission("Gestor"), controllers.propostas.listarPropostas) // listar propostas
    .post("/adicionarproposta", this.permission("Gestor"), controllers.propostas.adicionarProposta) // adicionar propostas
    .post("/editarproposta", this.permission("Gestor"), controllers.propostas.editarProposta) // editar propostas
    .post("/eliminarproposta", this.permission("Gestor"), controllers.propostas.EliminarProposta) // eliminar propostas


    .post("/listarobjetos", this.permission("Gestor"), controllers.designacao_objeto.listarobjetos) 
    

/*
    .post("/technical-form/categorias/adicionarCat", controllers.categorias.adicionarCat)
    .put("/technical-form/categorias/updateCat/:CatId", controllers.categorias.updateCat)
    .post("/technical-form/condicoes_ambientais/adicionarCondAmb", controllers.condicoes_ambientais.adicionarCondAmb)
    .put("/technical-form/condicoes_ambientais/updateCondAmb/:CondAmbId", controllers.condicoes_ambientais.updateCondAmb)
    .post("/technical-form/condicoes_iluminacao/adicionarCondIlu", controllers.condicoes_iluminacao.adicionarCondIlu)
    .put("/technical-form/condicoes_iluminacao/updateCondIlu/:CondIluId", controllers.condicoes_iluminacao.updateCondIlu)
    .post("/technical-form/condicoes_poluicao/adicionarCondPolu", controllers.condicoes_poluicao.adicionarCondPolu)
    .put("/technical-form/condicoes_poluicao/updateCondPolu/:CondPoluId", controllers.condicoes_poluicao.updateCondPolu)
    .post("/technical-form/conjuntos/adicionarConj", controllers.conjuntos.adicionarConj)
    .put("/technical-form/conjuntos/updateConj/:ConjId", controllers.conjuntos.updateConj)
    .post("/technical-form/contacto/adicionarCont", controllers.contacto.adicionarCont)
    .put("/technical-form/contacto/updateCont/:ContId", controllers.contacto.updateCont)
    .post("/technical-form/descricao_biologica/adicionarDescBio", controllers.descricao_biologica.adicionarDescBio)
    .put("/technical-form/descricao_biologica/updateDescBio/:DescBioId", controllers.descricao_biologica.updateDescBio)
    .post("/technical-form/descricao_fisica/adicionarDescFis", controllers.descricao_fisica.adicionarDescFis)
    .put("/technical-form/descricao_fisica/updateDescFis/:DescFisId", controllers.descricao_fisica.updateDescFis)
    .post("/technical-form/descricao_material/adicionarDescMat", controllers.descricao_material.adicionarDescMat)
    .put("/technical-form/descricao_material/updateDescMat/:DescMatId", controllers.descricao_material.updateDescMat)
    .post("/technical-form/descricao_patrimonial/adicionarDescPat", controllers.descricao_patrimonial.adicionarDescPat)
    .put("/technical-form/descricao_patrimonial/updateDescPat/:DescPatId", controllers.descricao_patrimonial.updateDescPat)
    .post("/technical-form/descricao_tecnica/adicionarDescTec", controllers.descricao_tecnica.adicionarDescTec)
    .put("/technical-form/descricao_tecnica/updateDescTec/:DescTecId", controllers.descricao_tecnica.updateDescTec)
    .post("/technical-form/designacao_objecto/adicionarDesObj", controllers.designacao_objecto.adicionarDesObj)
    .put("/technical-form/designacao_objecto/updateDesObj/:DesObjId", controllers.designacao_objecto.updateDesObj)
    .post("/technical-form/detalhes_estado_conservacao/adicionarDetCons", controllers.detalhes_estado_conservacao.adicionarDetCons)
    .put("/technical-form/detalhes_estado_conservacao/updateDetCons/:DetConsId", controllers.detalhes_estado_conservacao.updateDetCons)
    .post("/technical-form/detalhes_exames/adicionarDetExam", controllers.detalhes_exames.adicionarDetExam)
    .put("/technical-form/detalhes_exames/updateDetExam/:DetExamId", controllers.detalhes_exames.updateDetExam)
    .post("/technical-form/documentacao/adicionarDocu", controllers.documentacao.adicionarDocu)
    .put("/technical-form/documentacao/updateDocu/:DocuId", controllers.documentacao.updateDocu)
    .post("/technical-form/fotos/adicionarFoto", controllers.fotos.adicionarFoto)
    .put("/technical-form/fotos/updateFoto/:FotoId", controllers.fotos.updateFoto)
    .post("/technical-form/intervencao_proposta/adicionarInter", controllers.intervencao_proposta.adicionarInter)
    .put("/technical-form/intervencao_proposta/updateInter/:InterId", controllers.intervencao_proposta.updateInter)
    .post("/technical-form/intervencao_realizada/adicionarInterReal", controllers.intervencao_realizada.adicionarInterReal)
    .put("/technical-form/intervencao_realizada/updateInterReal/:InterRealId", controllers.intervencao_realizada.updateInterReal)
    .put("/technical-form/intervencoes_anteriores/adicionarInterAnt", controllers.intervencoes_anteriores.adicionarInterAnt)
    .post("/technical-form/intervencoes_anteriores/updateInterAnt/:InterAntId", controllers.intervencoes_anteriores.updateInterAnt)
    .put("/technical-form/membro_equipa/adicionarMembro", controllers.membro_equipa.adicionarMembro)
    .post("/technical-form/membro_equipa/updateMembro/:MembroId", controllers.membro_equipa.updateMembro)
    .put("/technical-form/objectivos_gerais_usados/adicionarObjGerUsa", controllers.objectivos_gerais_usados.adicionarObjGerUsa)
    .post("/technical-form/objectivos_gerais_usados/updateObjGerUsa/:objectivos_gerais_usadosId", controllers.objectivos_gerais_usados.updateObjGerUsa)
    .put("/technical-form/objectivos_gerais/adicionarObjGer", controllers.objectivos_gerais.adicionarObjGer)
    .post("/technical-form/objectivos_gerais/updateObjGer/:ObjGerId", controllers.objectivos_gerais.updateObjGer)
    .put("/technical-form/objecto_equipa/adicionarObjEqp", controllers.objecto_equipa.adicionarObjEqp)
    .post("/technical-form/objecto_equipa/updateObjEqp/:ObjEqpId", controllers.objecto_equipa.updateObjEqp)
    .put("/technical-form/pessoa/adicionarPessoa", controllers.pessoa.adicionarPessoa)
    .post("/technical-form/pessoa/updatePessoa/:PessoaId", controllers.pessoa.updatePessoa)
    .put("/technical-form/proposta_metodologia_intervencao/adicionarProposta", controllers.proposta_metodologia_intervencao.adicionarProposta)
    .post("/technical-form/proposta_metodologia_intervencao/updateProposta/:PropostaId", controllers.proposta_metodologia_intervencao.updateProposta)
    .put("/technical-form/sub_categorias/adicionarCategorias", controllers.sub_categorias.adicionarCategorias)
    .post("/technical-form/sub_categorias/updateCategorias/:CategoriasId", controllers.sub_categorias.updateCategorias)
    .put("/technical-form/tabela_exames_analises/adicionarTabela", controllers.tabela_exames_analises.adicionarTabela)
    .post("/technical-form/tabela_exames_analises/updateTabela/:TabelaId", controllers.tabela_exames_analises.updateTabela)
    .put("/technical-form/vontade_intervencao_proprietario/adicionarVontade", controllers.vontade_intervencao_proprietario.adicionarVontade)
    .post("/technical-form/vontade_intervencao_proprietario/updateVontade/:VontadeId", controllers.vontade_intervencao_proprietario.updateVontade);*/
};

Server.prototype.permission = function (role) {
  return function (req, res, next) {
    console.log(req.headers.authorization)

   /* if (req.user.Role == null || req.user == "") {
      return res.status(401).json({
        'Result': 401,
        'Message': 'You are not logged in'
      });
    } else {*/
      var role_basedados = String(req.user.Role.nome);
      if (role.indexOf(role_basedados) > -1 || role_basedados === role) {
        next();
      } else {
        return res.status(401).json({
          'Result': 401,
          'Message': 'Access Denied',
          'Role Required': role,
          'Your Role': role_basedados
        });
      }

  };
};

module.exports = Server;
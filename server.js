const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/user');
const http = require("http");
var controllers = require("./controllers/index");
var multer = require('multer');

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
    .post("/adicionar", this.permission(["Tecnico", "Gestor"]), controllers.designacao_objetos.adicionar)
    .get("/listar", this.permission("DiretorTecnico"), controllers.designacao_objetos.listar)
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

    .post("/listareventos",this.permission("Gestor"), controllers.eventos.listareventos) // listar eventos
    .post("/evento", this.permission("Gestor"), controllers.eventos.evento) // listar um pedido
    .post("/eliminarevento", this.permission("Gestor"), controllers.eventos.eliminarevento) // eliminar um pedidos
    .post("/editarevento", this.permission("Gestor"), controllers.eventos.editarevento) // editar um cliente
    .post("/adicionarevento", this.permission("Gestor"), controllers.eventos.adicionarevento)  // adicionar pedido      

    //.post("/listarpropostas",  controllers.propostas.listarpropostas) // listar eventos
  };



Server.prototype.permission = function (role) {
  return function (req, res, next) {
    //console.log(req.headers.authorization)
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
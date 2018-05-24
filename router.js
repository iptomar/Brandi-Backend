var controllers = require("./controllers/index");

var Router = function(server) {
  this.server = server;
}

Router.prototype.start = function() {
  this.server.app
    .post('/registar', controllers.user.register)
    .post('/login', this.permission('tecnico'), controllers.user.login)
    .get('/user', controllers.user.getClient)
    .post('/adicionar', this.permission('gestor'), controllers.DesObjeto.adicionar)
    .get('/listar', this.permission('tecnico'), controllers.DesObjeto.listar)
    .post('/registar/cliente', controllers.client.register)
    .put('/editar/:ClienteId', controllers.client.updateClient)
}

Router.prototype.permission = function(role) {
  //ir a base de dados
  var role_basedados = 'gestor';

  return function(req, res, next) {
    if(role_basedados === role) {
      next();
    } else {
      return res.status(401).json({
        'result': 'nok',
        'message': 'access denied'
      });
    }
  };
};

module.exports = Router;

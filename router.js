module.exports = (app) => {
    var controllers = require("./controllers/index");

    app
        .post('/register', require('permission')(['gestor']), controllers.user.register)
        .post('/login', controllers.user.login)
        .get('/user', controllers.user.getClient)
        .post('/adicionar', require('permission')(['gestor']), controllers.DesObjeto.adicionar)
        .post('/listar', controllers.DesObjeto.listar)
    // .post('/editar'
    // .post('/adicionar'
}
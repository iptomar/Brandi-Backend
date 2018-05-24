module.exports = (app) => {
    var controllers = require("./controllers/index");

    app
        .post('/registar', require('permission')(['gestor']), controllers.user.register)
        .post('/login', controllers.user.login)
        .get('/user', controllers.user.getClient)
        .post('/adicionar', require('permission')(['gestor']), controllers.DesObjeto.adicionar)
        .get('/listar', controllers.DesObjeto.listar)
        .post('/registar/cliente', require('permission')(['gestor']), controllers.client.register)
        .put('/editar/:ClienteId', require('permission')(['gestor']), controllers.client.updateClient)
    // .post('/adicionar'
}
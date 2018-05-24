module.exports=(app)=>{
    var controllers=require("./controllers/index");

    app
        .post('/register', controllers.user.register)
        .post('/login', controllers.user.login)
        .get('/user', controllers.user.getClient)
        
    ;
}
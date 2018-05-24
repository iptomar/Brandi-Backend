const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/user');
const http = require("http");
var Router = require('./router')

var Server = function(port) {
  this.port = port;
  this.app = express();
  this.router = new Router(this);

  this.server= http.createServer();
  this.app.use('/', express.static('public'));

  this.app.use(bodyParser.urlencoded({
    extended: true
  }));
  this.app.use(bodyParser.json());

  this.router.start();

  this.server.on("request", this.app);
};

Server.prototype.start = function() {

    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      res.header('Access-Control-Allow-Credentials', true);

      console.log("\x1b[36m" + req.method, req.url + "\x1b[0m");

      if (req.method === "OPTIONS") {
        return res.send(200);
      }
    });

    this.app.use(this.auth);

    this.server.listen(this.port, () => console.log('PSI - app listening'))
};


Server.prototype.auth = function(req, res, next) {
  if (req.headers.authorization) {
    user.validateToken(req.headers.authorization).then(
      client => {
        if (client) req.client = client;
        else req.client = null;
        next();
      },
      error => {
        req.client = null;
        next();
      });
  } else {
    req.client = null;
    next();
  }
};

module.exports = Server;

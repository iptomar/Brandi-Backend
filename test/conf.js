var Server = require('../server');

var server = new Server();

module.exports = {
  app: server.app
};

var Server = require('./server');

require('./models/db').sequelize.sync().then(
  () => {
    var s = new Server(process.env.PORT || 3000);
    s.start();
  },
  error => {
    console.log("connection refused", error);
    process.exit(1);
  }
)

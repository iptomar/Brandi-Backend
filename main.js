var Server = require("./server");
var db = require("./models/db");

require("./models/db").sequelize.sync().then(
  () => {
    var s = new Server();
    s.start(process.env.PORT || 8081);
    require("./controllers/role").register();
    require("./controllers/user").createAdmin();
  },
  error => {
    console.log("connection refused", error);
    process.exit(1);
  }
);

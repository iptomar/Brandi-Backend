var db = require("../models/db");

exports.register = (req, res) => {
  db.Role.bulkCreate([{
    nome: "Gestor"
  }, {
    nome: "Tecnico"
  }, {
    nome: "TecnicoFormacao"
  }, {
    nome: "DiretorTecnico"
  }, {
    nome: "Coordenador"
  }]);
  /*.then(
      role => res.status(200),
      error => res.status(200).send("Roles already defined")
    );*/
};

exports.list = (req, res) => {
  db.Role.findAll().then(
    role => res.status(200).json({
      "roles": role
    }),
    error => res.status(500).send(error.message)
  )
};

exports.getCount = () => {
  db.Role.findAndCountAll().then(
    function (number) {
      var c = number.count;
      return c;
    }
  );
};
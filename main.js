var express = require('express');
var cors = require('cors')
var app = express();

var mysql = require('mysql')
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'OK, algo funciona!' }));

app.use(cors())  // necessario usar
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("PSI - app listening at http://%s:%s", host, port)
})


function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',    
    user     : 'leitor',
    password : 'nuno',
    database : 'db6'
  });
 

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

// lista os clientes
router.post('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Cliente', res);	
})

// inserir na base dados, a chave primaria auto-incrementa
router.post('/adicionar', (req, res) =>{
	const nome = req.query.nome
    const NIF = req.query.nif
	const morada = req.query.morada    	
	const email = req.query.email
	const contato = req.query.contato	    
	
	execSQLQuery(`INSERT INTO Cliente(Nome, NIF, Morada, Email, Contato) VALUES('${nome}','${NIF}','${morada}','${email}','${contato}')`, res);
})

// editar cliente   :id ver pagina de utilizador
router.post('/editar', (req, res) =>{
    const id = req.query.id
	const nome = req.query.nome
    const NIF = req.query.NIF
	const morada = req.query.morada    	
	const email = req.query.email
	const contato = req.query.contato

	execSQLQuery(`UPDATE Cliente SET Nome='${nome}', NIF='${NIF}', Morada = '${morada}', Email = '${email}', Contato = '${contato}' WHERE id='${id}'`, res);	
})

// lista cliente unico
router.post('/clientes/:id', (req, res) =>{	
    execSQLQuery('SELECT * FROM cliente WHERE id=' + parseInt(req.params.id), res);
})

// apaga cliente
router.post('/apagar/', (req, res) =>{	
	execSQLQuery('DELETE FROM Cliente WHERE id=' + req.query.id, res)
})


// inserir objectos na base dados
router.post('/adicionar', (req, res) =>{
	const designacao = req.query.designacao
    const tipologia = req.query.tipologia
	const localizacao = req.query.localizacao
	execSQLQuery(`INSERT INTO designacao_objecto(Designacao, Tipologia, Localizacao) VALUES('${designacao}','${tipologia}','${localizacao}')`, res);
})
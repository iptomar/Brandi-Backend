const express = require('express')
const app = express()

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index.html');
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', () => console.log(req.body.Nome) )
app.listen(3000, () => console.log('Example app listening on port 3000!'))
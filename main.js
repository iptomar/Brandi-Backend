require('./models/db').sequelize.sync().then(
    () => {
        const express = require('express')
        const app = express()
        const bodyParser = require('body-parser');

        const user = require('./controllers/user');
        const server = require("http").createServer();


        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            res.header('Access-Control-Allow-Credentials', true);

            console.log("\x1b[36m" + req.method, req.url + "\x1b[0m");

            if (req.method === "OPTIONS") {
                return res.send(200);
            }

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
        });

        app.use('/', express.static('public'));
        require("./router")(app);

        server.on("request", app);
        server.listen(3000, () => console.log('Example app listening on port 3000!'))
    },
    error => {
        console.log("connection refused", error);
        process.exit(1);
    }
)

const express = require('express');
const app = express();
const port = 3000;

let Task = require('./api/models/todoModel');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});


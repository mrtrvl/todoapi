const express = require('express');
const app = express();
let mongoose = require('mongoose');
const port = 3000;

let Task = require('./api/models/todoModel');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo').then(
    () => {
        console.log(`Connected to database`);
    },
    (err) => {
        console.log(err);
    }
);

let routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});


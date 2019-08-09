const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const connection = require('./db_connection');
const mainRouter = require('./routes/main');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.use(express.json());
app.use(bodyParser.json());

app.use('/', mainRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

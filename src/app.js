const express = require('express');
require('express-async-errors');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');
const { NotFoundError } = require('./errors');
const translate = require('./routes/translate');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/translate', translate);

app.all('*', (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

module.exports =  app ;

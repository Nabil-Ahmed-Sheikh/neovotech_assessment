const express = require('express');
require('express-async-errors');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./src/swagger.yaml');

const errorHandler = require('./middlewares/errorHandler');
const { NotFoundError } = require('./errors');
const translate = require('./routes/translate');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/translate', translate);


app.all('*', (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

module.exports =  app ;

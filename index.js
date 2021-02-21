const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = "5000";
const urldb = "mongodb://localhost:27017/stock";

const app = express();
const routes = require('./routes');

app.use(bodyParser.json()); //Converte o corpo das requisições para o formato JSON
app.use(bodyParser.urlencoded({ extended: false })); //os dados codificados por URL são analisados com a biblioteca querystring

mongoose.connect(urldb, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("Mongo database connection established");
});

app.use('/', routes); //Permite que todas as rotas definidas sejam utilizadas
// "/create", "/remove", "/update", "/update/category", "/read", "/read/tittle", "/read/category"

//Todas as rotas podem ser utilizadas no formato "http://localhost:<port>/<router>
app.listen(port, () => {
    console.log("Server Online on Port ", port);
});
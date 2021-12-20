//ingresar la info de la base de datos
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const mongo_uri = 'mongodb://localhost/choco-peajes';

mongoose
    // .connect(process.env.MONGODB_URI)
    .connect(mongo_uri)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));
   

module.exports= mongoose;
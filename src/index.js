const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//DB connection
const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 8000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes


//Static files
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})
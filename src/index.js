const express = require('express');
const morgan = require('morgan');
const path = require('path');
const userRoutes = require('./routes/user');

const app = express();

require('dotenv').config();

//DB connection
const {mongoose} = require('./database');
    


//Settings
app.set('port', process.env.PORT || 8000);

//Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use('/api',userRoutes);

//Routes


//Static files
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})
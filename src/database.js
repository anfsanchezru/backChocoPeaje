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

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    const user = await new User({username,password});

    user.save(err => {
        if(err){
            res.status(500).send('Error al registrarse')
            console.log(err)
        } else {
            res.status(200).send('Usuario registrado exitosamente!')
        }
    })
});

app.post('/authenticate', (req,res) => {
    const {username, password} = req.body;
    user.findOne({username}, (err, user) => {
        if(err){
            res.status(500).send('Error al login')
        } else if (!user){
            res.status(500).send('Usuario no existe!')
        } else {
            user.isCorrectPassword(password, (err,result) => {
                if(err){
                    res.status(500).send('Error al login')
                } else if(result){
                    res.status(200).send('Usuario ingresado exitosamente!')
                } else {
                    res.status(500).send('Usuario no ingreso.')
                }
            })
        } 
    })
});
    

    module.exports= mongoose;
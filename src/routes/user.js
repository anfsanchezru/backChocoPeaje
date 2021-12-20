const express = require('express');
const userSchema = require('../models/Tasks');

const router = express.Router();

// Create Users

// router.post('/users', (req,res)=>{
//     const user = userSchema(req.body);
//     user
//         .save()
//         .then((data)=> res.json(data))
//         .catch((error)=>console.error({message: error}))
// });

router.post('/register', async (req,res) => {
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

router.post('/authenticate', (req,res) => {
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

// Get all users

router.get('/register', (req,res)=>{
    const user = userSchema(req.body);
    user
        .find()
        .then((data)=> res.json(data))
        .catch((error)=>console.error({message: error}))
});



module.exports = router;
const express = require('express');
const userSchema = require('../models/Tasks');

const router = express.Router();

// Create Users

router.post('/users', (req,res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=>console.error({message: error}))
});

// Get all users

router.post('/users', (req,res)=>{
    const user = userSchema(req.body);
    user
        .find()
        .then((data)=> res.json(data))
        .catch((error)=>console.error({message: error}))
});



module.exports = router;
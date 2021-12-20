//ingresar la info de la base de datos
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

module.exports= mongoose;
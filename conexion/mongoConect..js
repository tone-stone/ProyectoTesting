var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ubikt', {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

const mongoose = require('mongoose');

const schema = mongoose.Schema({

    nombre: {
        type: 'String',
        required: true,
    },

    raza: {
        type: 'String',
        required: true,
    },

    edad: {
        type: 'Number',
        required: true,
    },


    tamaño: {
        type: 'String',
        required: true,
    },    

    foto: {
        type: 'String',
        required: true,
    },    

});

const Perro = mongoose.model('Perros', schema);

module.exports = Perro;



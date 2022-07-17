
const mongoose = require('mongoose');

const schema = mongoose.Schema({

    nombre: {
        type: 'String',
        required: true,
    },

    apellido: {
        type: 'String',
        required: true,
    },
    
    edad: {
        type: 'Number',
        required: true,
    },
    
    residencia:{
        type: 'String',
        required: true,
    },

    comentarios:{
        type: 'String',
        required: true,
    },

});

const Adoptante = mongoose.model('Adooptantes', schema);

module.exports = Adoptante;

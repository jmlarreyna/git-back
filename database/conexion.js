
require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGO;

const connection = mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - conectado a MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.log('[Mongoose] - error en: ', error);
})

module.exports = connection;




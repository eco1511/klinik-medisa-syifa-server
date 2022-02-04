const mongoose = require('mongoose')
const { urlDB } = require('../config')

mongoose.connect(urlDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    },err => {
        if(err) throw err;
        console.log('--connected to MongoDB--')
    })

const db = mongoose.connection;

module.exports = db
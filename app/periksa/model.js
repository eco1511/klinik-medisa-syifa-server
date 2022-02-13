const mongoose = require('mongoose')

let periksaSchema = mongoose.Schema({
    
    anamnesa: {
        type: String,
        require: true
    },

    diagnosa: {
        type: String,
        require: true
    },

    therapy: {
        type: String,
        require: true
    },

    keterangan: {
        type: String,
        require: true
    },

    daftar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Daftar'
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps: true})

module.exports = mongoose.model('Periksa', periksaSchema);
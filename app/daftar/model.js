const mongoose = require('mongoose')

let daftarSchema = mongoose.Schema({
    usia: {
        type: Number,
    },

    height: {
        type: Number,
    },

    weight: {
        type: Number,
    },

    pasien: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasien'
    }],

    layanan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Layanan'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps: true})

module.exports = mongoose.model('Daftar', daftarSchema);
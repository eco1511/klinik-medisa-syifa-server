const mongoose = require('mongoose')

let daftarSchema = mongoose.Schema({
    usia: {
        type: Number,
    },

    alergi: {
        type: String,
    },

    //vitalSign
    
    tensiDarah: {
        type: String,
    } ,
    suhu: {
        type: String,
    },
    respiratoryRate: {
        type: String,
    },

    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },

    pasien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasien'
    },

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
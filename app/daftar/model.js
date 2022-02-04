const mongoose = require('mongoose')

let daftarSchema = mongoose.Schema({
    anamnesa: {
        type: String,
        require: [true, 'anamnesa harus diisi']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    nominals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nominal'
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps: true})

module.exports = mongoose.model('Daftar', daftarSchema);
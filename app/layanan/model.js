const mongoose = require('mongoose')

let layananSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Nama layanan haris diisi']
    }
},{timestamps: true})

module.exports = mongoose.model('Layanan', layananSchema);
const mongoose = require('mongoose');
let pasienSchema = mongoose.Schema({
    name : {
        type : String,
        require: [true, 'Nama harus diisi']
    },
    tgllahir : {
        type : Date,
        require: [true, 'tanggal lahir harus diisi']
    },
    jenis : {
        type: String
    },
    alamat : {
        type : String,
        require: [true, 'alamat harus diisi']
    },
    phoneNumber : {
        type: String,
        require: [true, 'Nomor Telephone harus diisi'],
        maxlength: [13, 'panjang nomor telpon harus antara 8 - 13 karakter'],
        minlength: [8, 'minimal username harus antara 8 - 13 karakter']
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    idPasien : {
        type : String,
    }
},{timestamps: true})

module.exports = mongoose.model('Pasien', pasienSchema);
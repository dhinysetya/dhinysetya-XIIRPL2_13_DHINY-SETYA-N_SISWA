const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    sekolah : {
        type: String,
        required: [true, 'Silahkan isikan nama sekolah'],
        unique: true
    },

    nama : {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
    },

    nis : {
        type: String,
        required: [true, 'Silahkan isikan nis siswa'],
    },

    jurusan : {
        type: String,
        required: [true, 'Silahkan isikan jurusan siswa'],
    },

    alamat : {
        type: String,
        required: [true, 'Silahkan isikan alamat siswa'],
    },
    
})

module.exports = mongoose.model('Siswa', UserSchema )
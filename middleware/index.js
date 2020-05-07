var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register1', auth.registrasi1);
router.post('/api/v1/login2', auth.login2);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia1', verifikasi(), auth.halamanrahasia)


module.exports = router;
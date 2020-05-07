'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

//menampilkan semua data level
exports.tampilsemualevel = function(req,res){
    connection.query('SELECT * FROM t_level', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data level berdasarkan id
exports.tampilberdasarkanidlevel = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_level WHERE id_level = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};
  
//menampilkan semua data montir 
exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data montir berdasarkan id
exports.tampilberdasarkanidmontir = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data servis
exports.tampilsemuaservis = function(req,res){
    connection.query('SELECT * FROM t_servis', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data servis berdasarkan id
exports.tampilberdasarkanidservis = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_servis WHERE id_servis = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data sparepart
exports.tampilsemuasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data sparepart berdasarkan id
exports.tampilberdasarkanidsparepart = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data user
exports.tampilsemuauser = function(req,res){
    connection.query('SELECT * FROM t_user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data user berdasarkan id
exports.tampilberdasarkaniduser = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_user WHERE id_user = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data montir 
exports.tambah_montir = function(req, res){
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir, Nama_montir, harga_perjam) VALUES(?,?,?)',
         [id_montir, Nama_montir, harga_perjam],
         function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.ok("Berhasil Menambahkan Data",res)
             }
         });
}; 

//menambahkan data servis 
exports.tambahservis = function(req, res){
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_servis = req.body.jam_servis;

    connection.query('INSERT INTO t_servis (tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_servis) VALUES(?,?,?,?,?,?)',
         [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_servis],
         function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.ok("Berhasil Menambahkan Data",res)
             }
         });
};

//menambahkan data sparepart
exports.tambahsparepart = function(req, res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (id_sparepart, nama_sparepart, harga_sparepart, satuan) VALUES(?,?,?,?)',
         [id_sparepart, nama_sparepart, harga_sparepart, satuan],
         function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.ok("Berhasil Menambahkan Data",res)
             }
         });
}; 
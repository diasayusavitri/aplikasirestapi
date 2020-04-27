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
exports.tambahMontir = function(req, res){
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO montir (Nama_montir, harga_perjam) VALUES(?,?)',
         [Nama_montir, harga_perjam],
         function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.ok("Berhasil Menambahkan Data",res)
             }
         });
};   
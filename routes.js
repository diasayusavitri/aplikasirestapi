'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampillevel')
        .get(jsonku.tampilsemualevel);
    
    app.route('/tampillevel/:id')
        .get(jsonku.tampilberdasarkanidlevel);

    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);
    
    app.route('/tampilmontir/:id')
        .get(jsonku.tampilberdasarkanidmontir);
    
    app.route('/tampilservis')
        .get(jsonku.tampilsemuaservis);
    
    app.route('/tampilservis/:id')
        .get(jsonku.tampilberdasarkanidservis);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);
    
    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilberdasarkanidsparepart);

    app.route('/tampiluser')
        .get(jsonku.tampilsemuauser);
    
    app.route('/tampiluser/:id')
        .get(jsonku.tampilberdasarkaniduser);
        
    app.route('/tambah_montir')
        .post(jsonku.tambah_montir);

    app.route('/tambah_servis')
        .post(jsonku.tambah_servis);
    
    app.route('/tambahsparepart')
        .post(jsonku.tambahsparepart);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);

    app.route('/tambahlevel')
        .post(jsonku.tambahlevel);
    
    app.route('/editmontir')
        .put(jsonku.editmontir);
    
    app.route('/editsparepart')
        .put(jsonku.editsparepart);

    app.route('/edituser')
        .put(jsonku.edituser);

    app.route('/editlevel')
        .put(jsonku.editlevel);

    app.route('/editservis')
        .put(jsonku.editservis);

    app.route('/hapusmontir')
    .delete(jsonku.hapusmontir);

    app.route('/hapussparepart')
    .delete(jsonku.hapussparepart);

    app.route('/hapususer')
    .delete(jsonku.hapususer);

    app.route('/hapuslevel')
    .delete(jsonku.hapuslevel);

    app.route('/hapusservis')
    .delete(jsonku.hapusservis);
}
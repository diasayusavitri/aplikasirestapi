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

    app.route('/tambahservis')
        .post(jsonku.tambahservis);
    
    app.route('/tambahsparepart')
        .post(jsonku.tambahsparepart);
}
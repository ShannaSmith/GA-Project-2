const res = require('express/lib/response');
const Service = require('../models/service');
const Vehicle = require('../models/vehicle');





function create(req, res){
    console.log(req.body);
    const vehicle = new Vehicle(req.body);
    vehicle.save(function (err) {
        console.log(err);
        if(err) return res.redirect('/vehicles/new');
        console.log(vehicle);
        res.redirect('/vehicles');
    });
    };

    function newVehicle(req, res){
        res.render('vehicles/new', {
            title: 'Get Vehicle',
            VehicleId: req.params.id,
        })
    }
    

    module.exports = {
        create,
        new: newVehicle
    };
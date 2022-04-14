const res = require('express/lib/response');
const Service = require('../models/service');
const Vehicle = require('../models/vehicle');



function create(req, res){
    console.log(req.body);
    const user = new User(req.body);
    user.save(function (err) {
        console.log(err);
        if(err) return res.redirect('/users/new');
        console.log(user);
        res.redirect('/users');
    });
    };

module.exports = {
    
    create
};
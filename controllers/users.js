const res = require('express/lib/response');
const Service = require('../models/service');
const Vehicle = require('../models/vehicle');

function show(req,res){
    user.findById(req.params.id, function(err, user){
        console.log(user)
        Service.find({user: user._id}, function(err, schedules){
            res.render('user/show', { schedules, title: 'Maintenance Schedule', services});
        })
    })
}

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
    show,
    create
};
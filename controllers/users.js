const res = require('express/lib/response');
const Schedule = require('../models/schedule');
const Vehicle = require('../models/vehicle');

function show(req,res){
    user.findById(req.params.id, function(err, user){
        console.log(user)
        Schedule.find({user: user._id}, function(err, schedules){
            res.render('user/show', { schedules, title: 'Maintenance Schedule', schedule});
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
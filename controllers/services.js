const res = require('express/lib/response');
const Service = require('../models/service');



module.exports = {
	index,
	show,
	new: newService,
	create,
	delete: deleteService,
	edit
	
}

function edit(req, res){
  
	res.render('services/edit', {
		service: Schedule.getOne(req.params.id)
	})
}

function deleteService(req, res){
	console.log(req.params.id);
	Service.deleteOne(req.params.id)
	// Where do we want the client to go after they delete something?
	res.redirect('/services')
}

function create(req, res){
	console.log(req.body, ' <- req.body, contents of the form')
	// respond with a redirect

	// Logic adding to the database using the model
	Service.create(req.body)

	res.redirect('/services'); // takes an url endpoint <- referring to a route
}


function index(req, res){

	res.render('services/index', {
		service: Service.getAll()
	})
}

function show(req, res){
	console.log(req.params,  " < - req.params in show function")
	res.render('services/show', {
		serviceNum: req.params.id,
		service: Service.getOne(req.params.id)
	})
}


function newService(req, res){
	res.render('services/new')
} 











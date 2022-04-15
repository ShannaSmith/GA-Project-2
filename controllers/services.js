const res = require("express/lib/response");
const Service = require("../models/service");
const Vehicle = require("../models/vehicle");

module.exports = {
  index,
  show,
  new: newService,
  create,
  destroy,
  update,
};

async function update(req, res) {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.send(service);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function create(req, res) {
  req.body.owner = req.user._id;
  try {
    await Service.create(req.body);
    res.redirect(`/services/${req.body.vehicleId}`);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function index(req, res) {
  try {
    const services = await Service.find({ vehicleId: req.params.id });
    const vehicle = await Vehicle.findById(req.params.id);
    res.render("services/index", { services, nickname: vehicle.nickname });
  } catch (err) {
    res.status(500).send(err);
  }
}

function show(req, res) {
  res.render("services/show", {
    serviceNum: req.params.id,
    service: Service.getOne(req.params.id),
  });
}

function newService(req, res) {
  res.locals.query = req.query;
  res.render("services/new");
}


async function destroy(req, res) {
	
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.redirect(`/services/${req.body.vehicleId}`);
  } catch (err) {
	console.log(req.params, " < - req.params in show function");
    res.status(500).send(err);
  }
}

const res = require("express/lib/response");
const Service = require("../models/service");
const Vehicle = require("../models/vehicle");

async function index(req, res) {
  try {
    const vehicles = await Vehicle.find();
    res.render("vehicles", { vehicles });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function show(req, res) {
  try {
    const vehicle = await Vehicle.findById(req.params.id).lean();
    res.render("vehicles/show", vehicle);
  } catch (err) {
    res.status(500).send(err);
  }
}

function create(req, res) {
  console.log("rep bodyy", req.user);
  req.body.userId = req.user._id;
  const vehicle = new Vehicle(req.body);
  vehicle.save(function (err) {
    if (err) return res.redirect("/vehicles/new");
    res.redirect("/vehicles");
  });
}

function newVehicle(req, res) {
  res.render("vehicles/new", {
    title: "Get Vehicle",
    VehicleId: req.params.id,
  });
}

async function destroy(req, res) {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.redirect("/vehicles");
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  create,
  new: newVehicle,
  index,
  show,
  destroy
};

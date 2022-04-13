const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../controllers/vehicles');

router.get('/users/:id/vehicle', vehiclesCtrl.new);
router.post('/users/:id/vehicles', vehiclesCtrl.create);
module.exports = router;
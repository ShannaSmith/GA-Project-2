const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../controllers/vehicles');

router.get('/owners/:id/vehicle', vehiclesCtrl.new);
router.post('/owners/:id/vehicles', vehiclesCtrl.create);
module.exports = router;
const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../controllers/vehicles');

router.post('/', vehiclesCtrl.create);
router.get('/', vehiclesCtrl.index);
router.get('/new', vehiclesCtrl.new);
router.get('/:id', vehiclesCtrl.show);
router.post('/:id', vehiclesCtrl.destroy);
module.exports = router;
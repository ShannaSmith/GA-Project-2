const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../controllers/vehicles');

router.get('/', vehiclesCtrl.index);
router.get('/new', vehiclesCtrl.new);
router.get('/:id', vehiclesCtrl.show);
router.post('/', vehiclesCtrl.create);
router.post('/:id', vehiclesCtrl.destroy);
module.exports = router;
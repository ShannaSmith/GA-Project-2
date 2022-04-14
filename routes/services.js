const express = require('express');
const servicesCtrl = require('../controllers/services');

const router = express.Router();



router.post('/', servicesCtrl.create);
router.get('/new', servicesCtrl.new);
router.get('/:id', servicesCtrl.index);
router.put('/:id', servicesCtrl.update);
router.post('/:id', servicesCtrl.destroy);

module.exports = router;
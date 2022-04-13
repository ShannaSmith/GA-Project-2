const express = require('express');
const router = express.Router();
const servicesCtrl = require('../controllers/services');





router.post('/vehicles/:id/services', servicesCtrl.create);
router.get('/users/:id/services', servicesCtrl.show)
router.get('/users/:id/services', servicesCtrl.new);
router.get('/:id/edit', servicesCtrl.edit);
router.delete('/:id', servicesCtrl.delete);

modules.export = router;
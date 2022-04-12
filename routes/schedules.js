const express = require('express');
const router = express.Router();
const serviceSchedulesCtrl = require('../controllers/serviceSchedules');

router.post('/owners/:id/schedules', serviceSchedulesCtrl.create);
router.get('/owners/:id/schedules', serviceSchedulesCtrl);
modules.export = router;
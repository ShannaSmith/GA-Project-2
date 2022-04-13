const express = require('express');
const router = express.Router();
const schedulesCtrl = require('../controllers/serviceSchedules');

router.post('/users/:id/schedules', schedulesCtrl.create);
router.get('/users/:id/schedules', schedulesCtrl.new);
modules.export = router;
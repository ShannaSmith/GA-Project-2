const express = require('express');
const router = express.Router();
const ownersCtrl = require('../controllers/owners')
router.get('/', ownersCtrl.index);
//get Owners/new
router.get('/new', ownersCtrl.new);
//owners
router.get('/:id', ownersCtrl.show);
//Post flights
router.post('/', ownersCtrl.create);
// get owners vehicles
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

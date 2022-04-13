const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/owners')
router.get('/', usersCtrl.index);
//get Owners/new
router.get('/new', usersCtrl.new);
//owners
router.get('/:id', usersCtrl.show);
//Post maintenance
router.post('/', usersCtrl.create);
// get owners vehicles
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

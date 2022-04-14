const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
const isLoggedIn = require('../config/auth');


router.post('/', usersCtrl.create);


module.exports = router;

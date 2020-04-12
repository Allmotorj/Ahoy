var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')


router.get('/dashboard', usersCtrl.dash);

module.exports = router;



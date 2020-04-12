var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')


router.get('/dashboard', usersCtrl.dash);


router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


module.exports = router;



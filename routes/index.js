var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ahoy' });
  
});

router.get("/login", function(req, res, next) {
  res.render("users/login", { title: "Ahoy Login" });
});


module.exports = router;

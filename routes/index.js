var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ahoy' });
  
});

router.get("/login", function(req, res, next) {
  res.render("users/login", { title: "Ahoy Login" });
});


router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard/dashboard",
    failureRedirect: "/users/login",
  })
);





module.exports = router;



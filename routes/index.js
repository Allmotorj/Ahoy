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


router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/users/board',
    failureRedirect: '/', 
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/users/board",
    failureRedirect: "/",
  })
);





module.exports = router;



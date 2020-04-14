var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

 passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
    User.findOne({ 'googleId': profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
            console.log(profile);
          // we have a new user via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
},
    function(accessToken, refreshToken, profile, cb){
        User.findOne({ facebookId: profile.id }, function (err, user){
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                console.log(profile);
                var newUser = new User({
                    name: profile.displayName,
                    // email: profile.emails[0].value,
                    facebookId: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});
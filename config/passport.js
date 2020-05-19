var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy({
      usernameField: "email",
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        console.log(dbUser);
        console.log(email, password);
        if (!dbUser || !dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect email or password",
          });
        }

        return done(null, dbUser);
      });
    }
  )
);

// Alleged boilerplate code
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
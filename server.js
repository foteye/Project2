var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "thisisaverysecretsecret", resave: true, saveUninitialized: true })); //Session data for express
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the console on success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
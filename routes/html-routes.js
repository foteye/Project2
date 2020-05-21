var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/receipt");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/receipt");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/receipt", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/receipts.html"));
  });

  app.get("/insertReceipt", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/insertReceipt.html"));
  });
};
var db = require("../models");
var passport = require("../config/passport");
const { uuid } = require('uuidv4');

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/currentUser", function(req, res) {
    if (!req.user){
      res.json({});
    }

    res.json(req.user);
  });

  app.post("/api/insertReceipt", function(req, res) {
    if (!req.user) {
      res.status(401).json(err);
    }

    const { inputAmountTotal, inputAmountTax, inputDate, inputDescription, inputJustification, inputNumber, inputType, inputVendor } = req.body.formData;
  
    db.Receipt.create({
      id : uuid(),
      user : req.user.id,
      transactionDate : inputDate,
      transactionType : inputType,
      transactionNumber : inputNumber,
      amount : inputAmountTotal,
      tax : inputAmountTax,
      vendor : inputVendor,
      description: inputDescription,
      justification: inputJustification
    }).then(function(){
      res.status(200).json({});
    }).catch(function(err){
      res.status(500).json(err);
    });
  });
};
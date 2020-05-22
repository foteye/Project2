const db = require("../models");
const passport = require("../config/passport");
const {
  uuid
} = require('uuidv4');

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/currentUser", function(req, res) {
    if (!req.user) {
      res.json({});
    }

    res.json(req.user);
  });

  // View your own, and anyone who DIRECTLY reports to you
  app.get('/api/getReceipts', async function(req, res) {
    if (!req.user) {
      res.json({});
    }

    const query = `SELECT r.* FROM User u LEFT JOIN User u2 ON u2.manager = u.id INNER JOIN Receipt r ON r.user = u.id OR r.user = u2.id WHERE u.id = '${req.user.id}' ORDER BY r.transactionDate DESC`;

    try{
      const receipts = await db.sequelize.query(query, 
      {
        model: db.Receipt,
        mapToModel: true
      })
      res.status(200).json(receipts);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }

  });

  app.get('/api/getFirstLastName/:id', async function(req, res){
    if (!req.user){
      res.json({});
    }

    try {
      const user = await db.User.findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ 'firstName' : user.firstName, 'lastName': user.lastName});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.post("/api/insertReceipt", async function(req, res) {
    if (!req.user) {
      res.status(401).json(err);
    }

    const {
      inputAmountTotal,
      inputAmountTax,
      inputDate,
      inputDescription,
      inputJustification,
      inputNumber,
      inputType,
      inputVendor
    } = req.body.formData;

    try {
      await db.Receipt.create({
        id: uuid(),
        user: req.user.id,
        transactionDate: inputDate,
        transactionType: inputType,
        transactionNumber: inputNumber,
        amount: inputAmountTotal,
        tax: inputAmountTax,
        vendor: inputVendor,
        description: inputDescription,
        justification: inputJustification
      });
      res.status(200).json({});
    } catch (err){
      res.status(500).json(err);
    }

  });
};
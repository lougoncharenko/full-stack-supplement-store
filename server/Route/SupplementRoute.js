const express = require("express");
const router = express.Router();
const Supplement = require("../Model/SupplementModel")

// 
router.route("/create").post((req, res) => {
    const product_name =req.body.product_name;
    const image =req.body.image;
    const cost = req.body.cost;
    const newSupplement = new Supplement({
      product_name,
      image,
      cost,
    });
  
    newSupplement.save();
  })

  router.route("/data").get((req, res) => { 
    Supplement.find()
    .then(foundSupplements => res.json(foundSupplements))
})
module.exports = router;
  
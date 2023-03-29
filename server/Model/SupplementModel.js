const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplementSchema = new Schema({
    product_name: { type: String, required: true },
    image: { type: String, required: true },
    cost: { type: Number, required: true },
  });

  const Supplement = mongoose.model("Supplement", SupplementSchema)

  // Export model
module.exports = Supplement;
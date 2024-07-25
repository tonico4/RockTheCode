const mongoose = require('mongoose');

const superMarketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  products: [{ type: mongoose.Types.ObjectId, required: true, ref: "products" }]
},
{
  timestamps: true,
  collection: "supermarkets"
})

const SuperMarket = mongoose.model("Supermarket", superMarketSchema, "supermarkets");
module.exports = SuperMarket;
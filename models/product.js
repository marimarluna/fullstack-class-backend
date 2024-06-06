const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  description: { type: String, default: false },
  price: { type: Number, default: false }
});

module.exports = mongoose.model('product', productSchema);

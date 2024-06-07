const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
  description: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('product', productSchema);

const Product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProducts = async (req, res) => {
  try {
    const product = new Product(req.body)
    const newProduct = await product.save();
    // envia respuesta a frontend
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getProducts,
    createProducts
}
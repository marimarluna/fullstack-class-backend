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
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) {
            return res.status(404).json({ message: "El producto no existe"})
        }
        await Product.findByIdAndDelete(req.params.id)
        res.json({ message: 'Producto Eliminado'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    createProducts,
    deleteProducts
}
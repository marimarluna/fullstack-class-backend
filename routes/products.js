const express = require('express');
const router = express.Router();
// Import controllers
const { getProducts, createProducts, deleteProducts } = require('../controllers/products');

router.get('/', getProducts);
router.post('/', createProducts)
router.delete('/:id', deleteProducts)

module.exports = router;

const express = require('express');
const router = express.Router();
// Import controllers
const { getProducts, createProducts } = require('../controllers/products');

router.get('/', getProducts);
router.post('/', createProducts)

module.exports = router;

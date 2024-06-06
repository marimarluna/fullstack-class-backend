const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(cors());
// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/testapp');

// Middleware
app.use(bodyParser.json());

// Rutas
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

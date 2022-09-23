const express = require('express');
const products = require('./data/products');
const port = process.env.PORT || 5000;

const app = express();

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, console.log('Server is running on port ' + port));

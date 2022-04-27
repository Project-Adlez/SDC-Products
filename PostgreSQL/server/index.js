/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  getRelatedProducts, getProductStyles, getProduct, getProducts,
} = require('./controllers/products');
const {
  postCart, getCart,
} = require('./controllers/cart');

const app = express();
const PORT = 3100;

app.use(cors());
app.use(bodyParser.json());

// Products
app.get('/products/:id/related', getRelatedProducts);
app.get('/products/:id/styles', getProductStyles);
app.get('/products/:id', getProduct);
app.get('/products/:page/:count', getProducts);

// Cart
app.post('/cart/:skuId/:count', postCart);
app.get('/cart', getCart);

app.get('/loaderio-179ed086c115ec52ff0964bd2e5dfeca/', (req, res) => {
  res.send('loaderio-179ed086c115ec52ff0964bd2e5dfeca');
});

app.listen(PORT, () => {
  console.log(`The SDC is running on: http://localhost:${PORT}.`);
});

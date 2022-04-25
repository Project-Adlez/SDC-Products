/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  getRelatedProducts, getProductStyles, getProduct, getProducts,
} = require('./controllers/products');

const app = express();
const PORT = 3100;

app.use(cors());
app.use(bodyParser.json());

// PRODUCTS REQUEST
app.get('/products/:id/related', getRelatedProducts);
app.get('/products/:id/styles', getProductStyles);
app.get('/products/:id', getProduct);
app.get('/products/:page/:count', getProducts);

app.listen(PORT, () => {
  console.log(`The SDC is running on: http://localhost:${PORT}.`);
});

/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

// const router = express.Router();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/products/:id/styles', (req, res, next) => {
  db.query(`SELECT JSON_BUILD_OBJECT(
    'product_id', (SELECT id FROM products WHERE id = $1),
    'results', (SELECT JSON_AGG(ROW_TO_JSON(styles)) FROM (SELECT id, name, sale_price, original_price, default_style,
      (SELECT JSON_AGG(ROW_TO_JSON(photos)) photos FROM (SELECT thumbnail_url, url FROM photos WHERE style_id = styles.id) photos),
      (SELECT ROW_TO_JSON(skus) skus FROM (SELECT quantity, size FROM skus WHERE style_id = styles.id LIMIT 1) skus)
      FROM styles WHERE product_id = $1) styles)
  ) object`, [ req.params.id ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows[0].object);
    return result.rows;
  });
});

app.get('/products/:id/', (req, res) => {
  db.query(`SELECT JSON_BUILD_OBJECT(
    'product', (SELECT ROW_TO_JSON(products) product FROM (SELECT * FROM products WHERE id = $1) products),
    'features', (SELECT JSON_AGG(ROW_TO_JSON(features)) FROM (SELECT feature, value FROM features WHERE product_id = $1) features)
  ) object`, [ req.params.id ], (err, result) => {
    if (err) {
      console.log(err);
    }
    const { product, features } = result.rows[0].object;
    product.features = features;
    res.send(product);
  });
});

app.get('/products', (req, res, next) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
    return result.rows;
  });
});

app.listen(PORT, () => {
  console.log(`The SDC is running on: http://localhost:${PORT}.`);
});

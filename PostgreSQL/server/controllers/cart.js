const db = require('../../db');

exports.postCart = (req, res, next) => {
  const { skuId, count } = req.params;
  db.query('INSERT INTO cart (sku_id, count) VALUES ($1, $2)', [ skuId, count ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send('Item and quantity successfully added!');
    return result;
  });
};

exports.getCart = (req, res, next) => {
  db.query('SELECT sku_id, count FROM cart', (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
    return result;
  });
};

const db = require('../../db');

exports.postCart = (req, res, next) => {
  db.query('INSERT INTO cart (sku_id) VALUES ($1)', [ req.params.sku_id ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result);
    return result;
  });
};

exports.getCart = (req, res, next) => {
  db.query('SELECT * FROM cart', (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result);
    return result;
  });
};

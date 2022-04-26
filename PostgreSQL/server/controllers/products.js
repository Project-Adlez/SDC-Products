const db = require('../../db');

exports.getRelatedProducts = (req, res, next) => {
  db.query('SELECT ARRAY_AGG(related_id) related FROM relatedProducts WHERE product_id = $1', [ req.params.id ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows[0].related);
    return result;
  });
};

exports.getProductStyles = (req, res, next) => {
  db.query(`SELECT JSON_BUILD_OBJECT(
    'product_id', (SELECT id FROM products WHERE id = $1),
    'results', (SELECT JSON_AGG(ROW_TO_JSON(styles)) FROM (SELECT style_id, name, sale_price, original_price, default_style,
      (SELECT JSON_AGG(ROW_TO_JSON(photos)) photos FROM (SELECT thumbnail_url, url FROM photos WHERE style_id = styles.style_id) photos),
      (SELECT JSON_OBJECT_AGG(
        "sku_id", JSON_BUILD_OBJECT(
          'quantity', quantity,
          'size', size
          )) AS skus FROM skus WHERE style_id = styles.style_id)
      FROM styles WHERE product_id = $1) styles)
  ) object`, [ req.params.id ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows[0].object);
    return result;
  });
};

exports.getProduct = (req, res, next) => {
  db.query(`SELECT JSON_BUILD_OBJECT(
    'product', (SELECT ROW_TO_JSON(products) FROM (SELECT id, name, slogan, description, category, default_price,
      (SELECT JSON_AGG(ROW_TO_JSON(features)) features FROM (SELECT feature, value FROM features WHERE product_id = $1) features)
      FROM products WHERE id = $1) products)
  ) object`, [ req.params.id ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows[0].object.product);
    return result;
  });
};

exports.getProducts = (req, res, next) => {
  const { page, count } = req.params;
  const offset = (page - 1) * count;
  db.query('SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2', [ count, offset ], (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(result.rows);
    return result;
  });
};

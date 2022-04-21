-- createdb products
-- psql products

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  slogan TEXT,
  description TEXT,
  category VARCHAR(20),
  default_price INT
);

CREATE TABLE related (
  related_id SERIAL PRIMARY KEY
);

CREATE TABLE relatedProducts (
  relatedProducts_id SERIAL PRIMARY KEY,
  product_id INT,
  related_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id),
  CONSTRAINT fk_related
    FOREIGN KEY (related_id)
      REFERENCES related(related_id)
);

CREATE TABLE features (
  feature_id SERIAL PRIMARY KEY,
  feature VARCHAR(20),
  value VARCHAR(50),
  product_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  original_price INT,
  sale_price INT,
  initial BOOLEAN,
  product_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  thumbnail_url TEXT,
  url TEXT,
  style_id INT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(style_id)
);

CREATE TABLE skus (
  sku_id SERIAL PRIMARY KEY,
  quantity INT,
  size VARCHAR(5),
  style_id INT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(style_id)
);

CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  sku_id INT,
  CONSTRAINT fk_sku
    FOREIGN KEY (sku_id)
      REFERENCES skus(sku_id)
);
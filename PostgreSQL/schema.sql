-- psql Products < PostgreSQL/schema.sql

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS relatedProducts CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;
DROP TABLE IF EXISTS cart CASCADE;

DROP DATABASE IF EXISTS Products;

CREATE DATABASE Products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  slogan TEXT,
  description TEXT,
  category VARCHAR(20),
  default_price INT
);

CREATE TABLE relatedProducts (
  id SERIAL PRIMARY KEY,
  product_id INT,
  related_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(id)
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INT,
  feature VARCHAR(25),
  value VARCHAR(50),
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(id)
);

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INT,
  name VARCHAR(40),
  sale_price VARCHAR(10),
  original_price INT,
  default_style BOOLEAN,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INT,
  url TEXT,
  thumbnail_url TEXT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(id)
);

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INT,
  size VARCHAR(10),
  quantity INT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(id)
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  sku_id INT,
  CONSTRAINT fk_sku
    FOREIGN KEY (sku_id)
      REFERENCES skus(id)
);

CREATE INDEX photos_style_id_idx ON photos (style_id) INCLUDE (thumbnail_url, url);
CREATE INDEX skus_style_id_idx ON skus (style_id) INCLUDE (quantity, size);
CREATE INDEX styles_product_id_idx ON styles (product_id) INCLUDE (id, name, sale_price, original_price, default_style);
CREATE INDEX features_product_id_idx ON features (product_id) INCLUDE (feature, value);

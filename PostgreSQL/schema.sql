-- dropdb Products
-- createdb Products
-- psql Products < PostgreSQL/schema.sql

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
      REFERENCES products(id),
  CONSTRAINT fk_related
    FOREIGN KEY (related_id)
      REFERENCES products(id)
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INT,
  feature VARCHAR(20),
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
  size VARCHAR(5),
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
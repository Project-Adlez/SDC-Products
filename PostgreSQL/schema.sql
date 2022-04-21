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

CREATE TABLE relatedProducts (
  relatedProducts_id SERIAL PRIMARY KEY,
  product_id INT,
  related_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id),
  CONSTRAINT fk_related
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

CREATE TABLE features (
  feature_id SERIAL PRIMARY KEY,
  product_id INT,
  feature VARCHAR(20),
  value VARCHAR(50),
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  product_id INT,
  name VARCHAR(40),
  sale_price VARCHAR(10),
  original_price INT,
  default_style BOOLEAN,
  CONSTRAINT fk_product
    FOREIGN KEY (product_id)
      REFERENCES products(product_id)
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  style_id INT,
  url TEXT,
  thumbnail_url TEXT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(style_id)
);

CREATE TABLE skus (
  sku_id SERIAL PRIMARY KEY,
  style_id INT,
  size VARCHAR(5),
  quantity INT,
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
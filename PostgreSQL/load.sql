COPY products
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/product_sample.csv'
DELIMITER ','
CSV HEADER;

-- psql products < schema.sql
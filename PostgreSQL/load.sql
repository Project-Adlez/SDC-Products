-- psql Products < PostgreSQL/load.sql

COPY products
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/product_sample.csv'
DELIMITER ','
CSV HEADER;

COPY relatedProducts
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/related_sample.csv'
DELIMITER ','
CSV HEADER;

COPY features
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/features_sample.csv'
DELIMITER ','
CSV HEADER;

COPY styles
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/styles_sample.csv'
DELIMITER ','
CSV HEADER;

COPY photos
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/photos_sample.csv'
DELIMITER ','
CSV HEADER;

COPY skus
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Samples/skus_sample.csv'
DELIMITER ','
CSV HEADER;

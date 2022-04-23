-- psql Products < PostgreSQL/load.sql

COPY products
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/product.csv'
DELIMITER ','
CSV HEADER;

COPY relatedProducts
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/related.csv'
DELIMITER ','
CSV HEADER;

COPY features
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/skus.csv'
DELIMITER ','
CSV HEADER;

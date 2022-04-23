-- psql Products < PostgreSQL/load.sql

COPY products
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/product.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

COPY relatedProducts
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/related.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

COPY features
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/features.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

COPY styles
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/styles.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

COPY photos
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/photos.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

COPY skus
FROM '/Users/bradfordtrevino/Documents/RFP2202/SDC/SDC-Products/CSV/CSV Files/skus.csv'
DELIMITER ',' NULL 'null'
CSV HEADER;

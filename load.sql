COPY products
FROM 'link'
DELIMITER ','
CSV HEADER

-- psql products < schema.sql
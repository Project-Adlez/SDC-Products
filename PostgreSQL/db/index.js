/* eslint-disable no-unused-vars */
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  PG_USER, PG_HOST, PG_PORT, PG_PASSWORD, PG_DATABASE,
} = process.env;

const pool = new Pool({
  user: PG_USER,
  host: PG_HOST,
  port: PG_PORT,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

module.exports = {
  query: (text, params, callback) => (
    pool.query(text, params, callback)
  )
};

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  PG_USER, PG_HOST, PG_PORT, PG_PASSWORD, PG_DATABASE,
  EC2_USER, EC2_HOST, EC2_PORT, EC2_PASSWORD, EC2_DATABASE
} = process.env;

// Local Pool
// const pool = new Pool({
//   user: PG_USER,
//   host: PG_HOST,
//   port: PG_PORT,
//   password: PG_PASSWORD,
//   database: PG_DATABASE,
// });

// EC2 Pool
const pool = new Pool({
  user: EC2_USER,
  host: EC2_HOST,
  port: EC2_PORT,
  password: EC2_PASSWORD,
  database: EC2_DATABASE,
});

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT * FROM products', (err, res) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(res.rows);
//   });
// });

module.exports = {
  query: (text, params, callback) => (
    pool.query(text, params, callback)
  )
};

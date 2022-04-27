const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Local Pool
// const pool = new Pool({
//   user: 'bradfordtrevino',
//   host: 'localhost',
//   port: 5432,
//   password: 'BTnp121821!',
//   database: 'Products',
// });

// EC2 Pool
const pool = new Pool({
  user: 'postgres',
  host: '54.203.0.215',
  port: 5432,
  password: 'BTnp121821!',
  database: 'products',
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

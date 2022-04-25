const { Pool } = require('pg');

const pool = new Pool({
  user: 'bradfordtrevino',
  host: 'localhost',
  port: 5432,
  password: 'BTnp121821!',
  database: 'Products',
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

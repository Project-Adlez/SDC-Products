const db = require('../db');

const query = {
  text: 'SELECT * FROM products',
  values: [],
};

pool.query(query, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

const db = require('./database');

// Example query
db('users')
  .select('*')
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error('Error fetching users:', err);
  });

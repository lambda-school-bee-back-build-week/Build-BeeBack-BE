const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: "User",
      password: bcrypt.hashSync('pass', 8),
      email: 'realUser@realemail.com'
    }
  ])
};

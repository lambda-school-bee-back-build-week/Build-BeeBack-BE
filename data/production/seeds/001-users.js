
const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username: "user",
      password: bcrypt.hashSync('pass', 8),
      email: 'realUser@realemail.com'
    },
    {
      username: "user1",
      password: bcrypt.hashSync('pass', 8),
      email: 'realUser1@realemail.com'
    }
  ])
};

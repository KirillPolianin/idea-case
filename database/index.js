const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'idea_case',
    user: 'root',
    password: 'password1'
  }
});

module.exports = knex;

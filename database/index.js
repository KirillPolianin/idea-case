const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'idea_case',
    user: 'root',
    password: 'password1',
    timezone: 'UTC',
    dateStrings: true
  }
});

module.exports = knex;

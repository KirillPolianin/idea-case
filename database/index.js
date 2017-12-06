const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'idea_case',
    user: 'root',
    password: '14881488'
  }
});

module.exports = knex;

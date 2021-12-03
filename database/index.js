const mysql = require('mysql');
// const jisho = require('../server/api/jisho');
// const server = require('../server/')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'FILL_ME_IN',
  database: 'auto-tweet',
});
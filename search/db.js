var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'201602095',
    database:'sys'
  });
  db.connect();
  module.exports = db;

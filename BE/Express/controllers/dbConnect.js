const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dlsdud1228!',
  port: '3306',
  database: 'mydb1',
});

connection.connect();

module.exports = connection;

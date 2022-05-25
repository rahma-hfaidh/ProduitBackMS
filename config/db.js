'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ROOT',
  database : 'fastifood'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("fastifood Database Connected successfully!");
});
module.exports = dbConn;

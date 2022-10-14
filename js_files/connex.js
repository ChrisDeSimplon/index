var mysql = require('mysql');

var conn = mysql.createConnection({
    database: 'Data',
    host: "localhost",
    user: "root",
    
    
  });

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
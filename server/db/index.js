var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chat"
  });

module.exports = con;
// con.connect(function(err) {
//   if(err) throw err;
//   console.log("Connected!");
// });

// con.end();
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

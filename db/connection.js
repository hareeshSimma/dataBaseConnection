
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'users'
});

connection.connect(function(err) {
    if (err)
     throw err;
     else {
       console.log("success");
     }
});
module.exports = mysql;
module.exports = connection;

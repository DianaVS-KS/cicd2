const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "cicd-hw2db.cykezmovqvtw.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "amazonrdsdiana",
    database: "HW2",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = connection;
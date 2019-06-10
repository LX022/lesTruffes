var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root", //put your local mysql user
    password: "nothing", //put your local mysql pw
    database: "truffes" //put your local database name
});


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM animal";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
});



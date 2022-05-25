const mysql = require("mysql2");


    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'ROOT',
        database: 'fastifood'
    });
    
    module.exports = pool.promise();





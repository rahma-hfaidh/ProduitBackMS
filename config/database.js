const mysql = require("mysql2");


    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fastifoodms'
    });
    
    module.exports = pool.promise();





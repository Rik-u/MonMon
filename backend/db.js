const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'monmon_admin',
    password: 'King1092',
    database: 'monmon_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database' + err.stack);
        return;
    }
    console.log('Connected to database' + connection.threadId);
});

module.exports = connection;
const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
    host: '98.81.238.72', // Your database host
    user: 'root',             // MySQL username
    password: 'Nomistake@4579', // MySQL password (use .env for security)
    database: 'test'          // Your database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Export the connection
module.exports = connection;

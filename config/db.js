const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
    host: '34.228.70.119', // Your database host
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

require('dotenv').config(); // Load .env variables

const mysql = require('mysql2');

// Create the MySQL connection
const db = mysql.createConnection({
  host: process.env.localhost,
  port:'3306',
  user: process.env.root,
  password:'Owade458@1',
  database: process.env.hospital_db
});

// Test the database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});
// export to connection 
module.exports = db
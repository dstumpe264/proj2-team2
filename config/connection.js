// Import sequelize
const Sequelize = require('sequelize');
// Enable access to .env variables
require('dotenv').config();

let sequelize;

// use .env variables to connect to database
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
  }
  
// Export
module.exports = sequelize;
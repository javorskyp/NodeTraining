require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  database: process.env.DATABASE || 'add mongo src',
};
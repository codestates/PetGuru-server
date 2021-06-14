require('dotenv').config();
  
module.exports = {

  development: {
    username: process.env.DEVELOPMENT_USER,
    password: process.env.DEVELOPMENT_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },

  production: {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT
  }
}
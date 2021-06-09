require('dotenv').config();
  
module.exports = {
  // development: {
  //   username: "admin",
  //   port: "13306",
  //   password: process.env.DATABASE_PASSWORD,
  //   database: "PetGuru",
  //   host: "petguru-database.cqjotvlky82v.us-east-2.rds.amazonaws.com",
  //   dialect: "mysql"
  // },

  development: {
    username: process.env.DEVELOPMENT_USER,
    password: process.env.DEVELOPMENT_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },

  // test: {
  //   username: "root",
  //   password: process.env.DATABASE_PASSWORD,,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  
    production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    port: process.env.DATABASE_PORT
  }
}
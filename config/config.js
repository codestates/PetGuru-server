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
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "PetGuru",
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
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
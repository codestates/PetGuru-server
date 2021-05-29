const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

//* 노드랑 mysql 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Answer = require('./answer')(sequelize, Sequelize);
db.Missing = require('./missing')(sequelize, Sequelize);
db.MissingAnswer = require('./missing_answer')(sequelize, Sequelize);
db.Pet = require('./pet')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);
db.Thread = require('./thread')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
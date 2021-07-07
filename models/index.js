'use strict';

const path = require("path");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'production';
const config = require(path.join(__dirname, "..", "config", "config.js"))[env];
const db = {};

//* 노드랑 mysql 연결
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  // config.host,
  // config.port,
  config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;


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

db.sequelize.sync({
	alter : true
})


//model association 설정

db.User.hasMany(db.Pet,{
  foreignKey: 'user_id',
  sourceKey: 'id'
});

db.Pet.belongsTo(db.User,{
  foreignKey: 'user_id',
  targetKey: 'id'
});



db.User.hasMany(db.Missing,{
  foreignKey: 'user_id',
  sourceKey: 'id'
});

db.Missing.belongsTo(db.User,{
  foreignKey: 'user_id',
  targetKey: 'id'
});



db.User.hasMany(db.MissingAnswer,{
  foreignKey: 'user_id',
  sourceKey: 'id'
});

db.MissingAnswer.belongsTo(db.User,{
  foreignKey: 'user_id',
  targetKey: 'id'
});



db.Pet.hasMany(db.Missing,{
  foreignKey: 'pet_id',
  sourceKey: 'id'
});

db.Missing.belongsTo(db.Pet,{
  foreignKey: 'pet_id',
  targetKey: 'id'
});



db.Missing.hasMany(db.MissingAnswer,{
  foreignKey: 'missing_id',
  sourceKey: 'id'
});

db.MissingAnswer.belongsTo(db.Missing,{
  foreignKey: 'missing_id',
  targetKey: 'id'
});


module.exports = db;
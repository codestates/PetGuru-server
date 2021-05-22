var DataTypes = require("sequelize").DataTypes;
var _Missing_answer = require("./Missing_answer");
var _answer = require("./answer");
var _missing = require("./missing");
var _pet = require("./pet");
var _question = require("./question");
var _thread = require("./thread");
var _user = require("./user");

function initModels(sequelize) {
  var Missing_answer = _Missing_answer(sequelize, DataTypes);
  var answer = _answer(sequelize, DataTypes);
  var missing = _missing(sequelize, DataTypes);
  var pet = _pet(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var thread = _thread(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    Missing_answer,
    answer,
    missing,
    pet,
    question,
    thread,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

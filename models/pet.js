// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('pet', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     user_id: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     type: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     sex: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     image_url: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     age: {
//       type: DataTypes.STRING(255),
//     born_year: {
//       type: "YEAR",
//       allowNull: true
//     },
//     created_at: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     updated_at: {
//       type: DataTypes.DATE,
//       allowNull: true
//     }
//   }, 
//     sequelize,
//     tableName: 'pet',
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id" },
//         ]
//       },
//     ]
//   });
// };

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pet.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    sex: DataTypes.STRING,
    image_url: DataTypes.STRING,
    born_year: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};
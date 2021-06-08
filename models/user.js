const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    social_google_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    login: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mentor_auth: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    auth_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mentor_career: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mentor_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     socialGoogleId: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     username: {
//       type: DataTypes.STRING(30),
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING(30),
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//     login: {
//       type: DataTypes.BOOLEAN
//     },
//     metorAuth: {
//       type: DataTypes.BOOLEAN
//     },
//     userImageUrl: {
//       type: DataTypes.STRING
//     },
//     mentorCareer: {
//       type: DataTypes.STRING
//     },
//     mentorDescription: {
//       type: DataTypes.STRING
//     }
//   }, {
//     charset: 'utf8',
//     collate: 'utf8_general_ci' //한글 저장
//   });
//   User.associate = (db) => {
//     db.User.hasMany(db.Question);
//     db.User.hasMany(db.Thread);
//     db.User.hasMany(db.Answer);
//     db.User.hasMany(db.Pet);
//     db.User.hasMany(db.Missing);
//     db.User.hasMany(db.MissingComment);
//   };
//   console.log(User);
//   return User;
// }
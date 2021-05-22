const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('missing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    missing_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    missing_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    missing_latitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    missing_longitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    video_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'missing',
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

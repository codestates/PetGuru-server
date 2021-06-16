const Sequelize = require('sequelize');
const { Missing } = require("../models/");
//슬안

module.exports = async (req, res) => {
  const missingpetinfo = await Missing.findAll({
    attributes: [
      "id",
      "pet_id",
      "missing_location",
      "missing_status",
      "missing_latitude",
      "missing_longitude",
      "missing_date",
      "image_url"
    ],
  });

  res.status(200).json({ mapinfo: missingpetinfo });
};
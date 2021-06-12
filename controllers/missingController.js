const Sequelize = require('sequelize');
const { Missing, Users } = require("../models/");
// multer 관련 추가


module.exports = {
  register:  async (req, res) => {
    const { 
      contents,
      title,
      latitude,
      longitude,
      name,
      type,
      sex,
      location,
      status
    } = req.body;

    //등록한 동물이 pet 데이터에 있는지 확인
    // const petInfo = await pet.findAll({
    //   where: { id: req.body.pet_id, user_id: req.session.user_id }
    // });

    //같은 동물로 중복 등록인지 확인
    const missingInfo = await Missing.findAll({
      where: { pet_id: req.body.pet_id }
    });

    if(!petInfo){
      //pet 데이터에 동물이 없으면 에러
      res.status(404).send("Could not find pet info");
    }
    else if(missingInfo){
      //실종신고 중복 등록글이면 에러
      res.status(409).send("Pet already registered as missing");
    }
    else{
      const image_url = req.file.location
      //문제가 없으면 db에 실종신고 정보 저장
      await Missing.create({
        contents,
        title,
        latitude,
        longitude,
        name,
        type,
        image_url,
        sex,
        location,
        status,
      });
      res.json({message: "success post missing pet register"});
    }
  },

  getList: async (req, res) => {
    //승준

    //미싱 테이블에 있는 모든 데이터를
    const missingData = await Missing.findAll({
      attributes: [
        "contents",
        "title",
        "latitude",
        "longitude",
        "image_url",
        "name",
        "type",
        "sex",
        "location",
        "status",
      ],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Users,
          attributes: ["id", "user_name", "email",],
        },
      ],
    });
    res.status(200).json({ list: missingData });
  },

  getDetail: async (req, res) => {
    //코드 작성해주세요!
    const missingInfo = await Missing.findOne({
      where: { id: req.params.id },
    });
  
    // DB에 missing Id에 맞는 정보가 있을 때
    if (missingInfo) {
      res.status(200).json({
        title: petInfo.title,
        petname: petInfo.petname,
        area: petInfo.area,
        sex: petInfo.sex,
        missingDate: petInfo.missingDate,
        description: petInfo.description,
        species: petInfo.species,
        reward: petInfo.reward,
        images: getImg,
        createdAt: petInfo.createdAt,

        contents: missingInfo.contents,
        title: missingInfo.title,
        latitude: missingInfo.latitude,
        longitude: missingInfo.longtitude,
        image_url: missingInfo.image_url,
        name: missingInfo.name,
        type: missingInfo.type,
        sex: missingInfo.sex,
        location: missingInfo.location,
        status: missingInfo.status
      });
    } else {
      res.status(401).json({ message: "invaild missingid" });
    }
  },


  edit: async (req, res) => {
    //슬안 작성
    const {
      contents,
      title,
      latitude,
      longitude,
      image_url,
      name,
      type,
      sex,
      location,
      status,
    } = req.body
    const id = req.params.id;
    
    //db의 실종신고 정보 수정
    const result = await missing.update({
      contents,
      title,
      latitude,
      longitude,
      image_url,
      name,
      type,
      sex,
      location,
      status,
      updated_at: Sequelize.NOW
    },
    {
      where: { id, user_id: req.session.user_id}
    });

    if (!result || result.includes(0)){
      res.status(500).send("Missing post edit error");
    }
    else {
        res.send("Success put missing pet info edit")
    }

  },

  delete: async (req, res) => {
    //슬안 작성
    const missing_id = req.params.id;

    //db의 실종신고 정보 삭제
    await missing.destroy({
      where: {
          id: missing_id, user_id: req.session.user_id
      }
    }).then(count => {
        if (!count) {
        return res.status(404).send("Missing post not found");
        }
        else{
          res.send("Successfully deleted Missing post");
        }
    });
  }

};

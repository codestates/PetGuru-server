const Sequelize = require('sequelize');
const { Missing, Pet } = require("../models/");
// multer 관련 추가


module.exports = {
  register:  async (req, res) => {
    //슬안 작성
    const { 
      contents,
      title,
      missing_latitude,
      missing_longitude,
      video_url,
      image_url,
      pet_id,
      missing_location,
      missing_status
    } = req.body;

    //등록한 동물이 pet 데이터에 있는지 확인
    const petInfo = await pet.findAll({
      where: { id: req.body.pet_id, user_id: req.session.user_id }
    });

    //같은 동물로 중복 등록인지 확인
    const missingInfo = await missing.findAll({
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
      //문제가 없으면 db에 실종신고 정보 저장
      await missing.create({
        contents,
        title,
        missing_latitude,
        missing_longitude,
        video_url,
        image_url,
        pet_id,
        missing_location,
        missing_status,
        user_id: req.session.user_id,
        created_at: Sequelize.NOW
      });

      res.send("success post missing pet register");
    }
  },

  info: async (req, res) => {
    //코드 작성해주세요!

  },

  edit: async (req, res) => {
    //슬안 작성
    const { 
      contents,
      title,
      missing_latitude,
      missing_longitude,
      video_url,
      image_url,
      pet_id,
      missing_location,
      missing_status
    } = req.body
    const missing_id = req.params.id;
    
    //db의 실종신고 정보 수정
    const result = await missing.update({
      contents,
      title,
      missing_latitude,
      missing_longitude,
      video_url,
      image_url,
      pet_id,
      missing_location,
      missing_status,
      updated_at: Sequelize.NOW
    },
    {
      where: { id: missing_id, user_id: req.session.user_id}
    });

    if (!result || result.includes(0)){
      res.status(500).send("Missing post edit error");
    }
    else{
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

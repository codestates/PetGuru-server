const Sequelize = require('sequelize');
const { Missing, Users } = require("../models/");
//슬안: missing 테이블 변경 내용 반영 완료
module.exports = {
  register:  async (req, res) => {
    const {
      contents,
      latitude,
      longitude,
      pet_name,
      type,
      sex,
      missing_location,
      status,
      missing_date,
      born_year,
    } = req.body;

    try{

      //db에 실종신고 게시글 저장
      const result = await Missing.create({
        user_id: req.session.user_id,
        contents,
        image_url: imageRegister,
        born_year,
        latitude,
        longitude,
        pet_name,
        type,
        sex,
        missing_location,
        status,
        missing_date,
        born_year
      });

      let imageRegister = req.files.reduce((acc, file) => {
        const fileObj = {
          image_url: file.location   //받아온 이미지 S3 링크
        };
        acc.push(fileObj);
        return acc;
      }, []);

      if(!result){
        res.status(500).send("Missing Post register error");
      }
      else{
        res.send("success post pet register");
      }
    } catch(error){
        console.error(error);
      };
  },

  getList: async (req, res) => {
    //승준
    console.log(Missing)
    try {
      
      const where = {}
      if (parseInt(req.query.lastId, 10)) { //초기 로딩이 아닐때
        where.id = {[Op.lt]: parseInt(req.query.lastId, 10)}
      }
      const missingData = await Missing.findAll({
        where,
        order: [["createdAt", "DESC"]],
        // where: { id: lastId },
        limit: 10,
        include: [{
          model: User
        }]
      });
      res.status(200).json({ list: missingData });
    } catch (e) {
      console.error(e);
    }
  },


  getDetail: async (req, res) => {
    const missingInfo = await Missing.findOne({
      where: { id: req.params.id },
    });
  
    // DB에 missing Id에 맞는 정보가 있을 때
    if (missingInfo) {
      console.log(missingInfo.longitude, missingInfo.latitude);
      res.status(200).json({
        missingInfo
      });
    } else {
      res.status(401).json({ message: "invaild missingid" });
    }
  },


  edit: async (req, res) => {
    const {
      contents,
      born_year,
      latitude,
      longitude,
      name,
      type,
      sex,
      missing_location,
      status,
      missing_date,
      pet_name
    } = req.body
    
    const id = req.params.id;

    try{

      //db의 실종신고 정보 수정
      const result = await Missing.update({
        contents,
        born_year,
        latitude,
        longitude,
        image_url: imageRegister, 
        name,
        type,
        sex,
        missing_location,
        status,
        missing_date,
        pet_name,
        updated_at: Sequelize.NOW
      },
      {
        where: { id, 
          //user_id: req.session.user_id
        }
      });

      let imageRegister = req.files.reduce((acc, file) => {
        const fileObj = {
          image_url: file.location //받아온 이미지 S3 링크
        };
        acc.push(fileObj);
        return acc;
      }, []);
      

      if (!result || result.includes(0)){
        res.status(500).send("Missing post edit error");
        console.log(result)
      }
      else {
          res.send("Success put missing pet info edit")
      }
    }catch(error){
      console.error(error);
    }
    

  },

  delete: async (req, res) => {
    //슬안 작성
    const missing_id = req.params.id;

    //db의 실종신고 정보 삭제
    await Missing.destroy({
      where: {
          id: missing_id, 
          // user_id: req.session.user_id
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

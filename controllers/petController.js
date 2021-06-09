const Sequelize = require('sequelize');

const { pet } = require("../models/");


//슬안
module.exports = {
    register: async (req, res) => {
        const { sex, name, type, image_url, born_year} = req.body;
        
        //db에 pet 정보 저장
        const result = await pet.create({
            sex, name, type, image_url, born_year,
            user_id: req.session.user_id,
            created_at: new Date()
        });
        
        if(!result){
            res.status(500).send("Pet register error");
        }
        else{
            res.send("success post pet register");
        }

    },

    info: async (req, res) => {
        const pet_id = req.params.pet_id;

        //db에서 pet 정보 조회
        const petInfo = await pet.findAll({
            where: { id: pet_id, user_id: req.session.user_id }
        })

        if(!petInfo) {
            res.status(404).send("Cannot get pet info");
        }
        else{
            const { pet_id, name, type, sex, image_url, born_year, created_at, updated_at } = petInfo;

            res.json({ data: { pet_id, name, type, sex, image_url, born_year, created_at, updated_at } });
        }
    },

    edit: async (req, res) => {
        const { sex, name, type, image_url, born_year} = req.body;
        const pet_id = req.params.id;

        //db의 pet 정보 수정
        const result = await pet.update({
            sex, name, type, image_url, born_year,
            updated_at: new Date()
        },
        {
            where: { id: pet_id, user_id: req.session.user_id}
        });

        if (!result || result.includes(0)){
            res.status(500).send("Pet info edit error");
        }
        else{
            res.send("success put pet edit")
        }
    },

    delete: async (req, res) => {
        const pet_id = req.params.id;
        
        //db의 pet 정보 삭제
        await pet.destroy({
            where: {
                id: pet_id, user_id: req.session.user_id
            }
        }).then(count => {
            if (!count) {
             return res.status(404).send("Pet Info not found");
            }
            else{
                res.send("Successfully deleted Pet Info");
            }
        });
    }
};

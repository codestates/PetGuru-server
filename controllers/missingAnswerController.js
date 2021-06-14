const Sequelize = require('sequelize');
const { MissingAnswer, Missing, User } = require("../models/");

//슬안
module.exports = {
    register: async (req, res) => {
        const { text, image_url, video_url} = req.body;
        const missing_id = req.params.id;

        //db에서 matching missing 게시글 조회
        const missingInfo = await Missing.findAll({
            where: { id: missing_id, user_id: req.session.user_id }
        })
        
        //db에 답글 저장
        try{
            const result = await MissingAnswer.create({
                text, image_url, video_url,
                user_id: req.session.user_id,
                missing_id: missing_id,
                created_at: Sequelize.NOW
            });
            
            if(!missingInfo){
                res.status(404).send("Could not find matching missing question");
            }
            else if (!result){
                res.status(500).send("Missing Comment register error");
            }
            else{
                res.send("success post pet register");
            }
        }catch(error){
            console.error(error);
        };
        

    },

    info: async (req, res) => {
        const missing_id = req.params.id;

        //db에서 missing 게시글 조회
        const missingInfo = await Pet.findAll({
            where: { id: missing_id, user_id: req.session.user_id }
        })


        if(!missingInfo) {
            res.status(404).send("Could not find a Missing Answer list.");
        }
        else{
            //missing 게시글의 댓글 가져오기
            const missingAnswerData = await MissingAnswer.findAll({
                attributes: [
                    "user_id",
                    "missing_id",
                    "image_url",
                    "video_url",
                    "text",
                ],
                order: [["createdAt", "DESC"]],
                include: [
                {
                    model: User,
                    attributes: [['id', 'user_id']],
                },
                ],
            });

            res.json({ data: { missingAnswerData } });
        }
    },

    edit: async (req, res) => {
        const { missing_id, text, image_url, video_url} = req.body;
        const missing_answer_id = req.params.id;

        //db의 missing comment 정보 수정
        const result = await MissingAnswer.update({
            missing_id, text, image_url, video_url,
            updated_at: Sequelize.NOW
        },
        {
            where: { id: missing_answer_id, user_id: req.session.user_id}
        });

        if (!result || result.includes(0)){
            res.status(404).send("Could not find matching missing comment");
        }
        else{
            res.send("successfully updated Missing answer")
        }
    },

    delete: async (req, res) => {
        const missing_answer_id = req.params.id;
        
        //db의 missing comment 정보 삭제
        await MissingAnswer.destroy({
            where: {
                id: missing_answer_id, user_id: req.session.user_id
            }
        }).then(count => {
            if (!count) {
             return res.status(404).send("Matching answer not found");
            }
            else{
                res.send("Successfully deleted Missing Answer");
            }
        });
    }
};

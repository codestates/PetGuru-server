const express = require('express')
const router = express.Router();
const missingController = require('../controllers/missingController');
const passport = require("passport");

const { upload } = require("./multer"); //multer 구현해야 함
const missingAnswerController = require('../controllers/missingAnswerController');

router.post(
    '/posts', 
    //passport.authenticate('jwt', { session: false }),
    upload.array("img"),
    missingController.register,
);

// 승준 코드
router.get('/posts', missingController.getList);
router.get('/posts/:id', missingController.getDetail)

//슬안 코드
router.put('/posts/:id', missingController.edit);
router.delete('/posts/:id', missingController.delete);


//슬안 - missing comment 관련 코드 연결
router.post('/comments/:id', missingAnswerController.register); //missing comment 등록
router.get('/comments', missingAnswerController.info); //missing comment 가져오기
router.put('/comments/:id', upload.array("img"),missingAnswerController.edit) //missing comment 수정
router.delete('/comments/:id', missingAnswerController.delete) //missing comment 삭제



module.exports = router;

const express = require('express')
const router = express.Router();
const missingController = require('../controllers/missingController');
const passport = require("passport");
const { upload } = require("./multer"); //multer 구현해야 함

router.post(
    '/posts', 
    passport.authenticate('jwt', { session: false }),
    upload.array("img"),
    missingController.register,
);

// 승준 코드
router.get('/posts', missingController.getList);
router.get('/posts/:id', missingController.getDetail)

router.put('/posts', missingController.edit);
router.delete('/posts', missingController.delete);

module.exports = router;

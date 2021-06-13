const express = require('express')
const router = express.Router();
const missingController = require('../controllers/missingController');
const passport = require("passport");

const { upload } = require("./multer"); //multer 구현해야 함

router.post(
    '/posts', 
    // passport.authenticate('jwt', { session: false }),
    // upload.single("img"),
    missingController.register,
);

<<<<<<< HEAD
router.get('/posts', missingController.info);
router.put('/posts/:id', missingController.edit);
router.delete('/posts/:id', missingController.delete);
=======
// 승준 코드
router.get('/posts', missingController.getList);
router.get('/posts/:id', missingController.getDetail)

router.put('/posts', missingController.edit);
router.delete('/posts', missingController.delete);
>>>>>>> 181aa7e73c47be3505980600f7697a2fb7d85351

module.exports = router;

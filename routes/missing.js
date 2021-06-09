const router = express.Router();
const missingController = require('../controllers/missingController');
const passport = require("passport");
const { upload } = require("./multer"); //multer 구현해야 함

router.post(
    '/posts', 
    passport.authenticate('jwt', { session: false }),
    upload.array('img'),
    missingController.register,
);

router.get('/posts', missingController.info);
router.put('/posts/:id', missingController.edit);
router.delete('/posts/:id', missingController.delete);

module.exports = router;

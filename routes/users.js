const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/signup', userController.signup);
console.log('여기까지')
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;

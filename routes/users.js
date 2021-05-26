const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')

router.post('/signup', controller.signup);

module.exports = router;

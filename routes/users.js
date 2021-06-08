const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);


//auth
router.get('/auth/google',
  // passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


module.exports = router;

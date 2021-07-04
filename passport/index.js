const passport = require('passport');
const local = require('./localStrategy.js');
const google = require('./googleStrategy.js')
const jwt = require('./JWTStrategy')
// const kakao = require('/kakaoStrategy');
const { User } = require('../models/');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({where: {id}})
          .then(user => done(null, user))
          .catch(err => done(err));
    });
    local();
    google();
    jwt();
}

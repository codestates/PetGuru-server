const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models/');
const sequelize = require('sequelize')

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email', //req.body.email
        passwordField: 'password', //req.body.password
    }, async (email, password, done) => {
        // console.log(User)
        // console.log('하하하핳ㅎ')
        try {
            const exUser = await User.findOne({ where: { email }});
            if (exUser) {
                const result = await bcrypt.compare(password, exUser.password);
                if (result) {
                    console.log(result)
                    done(null, exUser); // done함수 실행 시 그제서야 passport.authenticate 두 번째 인자 내 함수 실행
                } else {
                    done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
                  } 
                } else {
                  done(null, false, { message: '가입되지 않는 회원입니다.'});
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};
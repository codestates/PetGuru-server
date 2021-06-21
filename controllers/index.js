const { User } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");

module.exports = {
  signup: async (req, res, next) => {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // console.log(hashedPassword)
      try {
          const exUser = await User.findOne({
              where: {
                  email: req.body.email
              }
          });
          if (exUser) {
              return res.status(409).send("User is already registered");
          }
          await User.create({
              user_name: req.body.username,
              email: req.body.email,
              password: hashedPassword
          });
          res.status(200).send('success post signup');
        } catch {
            // console.error(error);
            console.log('에러다!!!')
            next(error);
        }
      },
  login: (req, res, next) => {
      passport.authenticate('local', (authError, user, info) => {
          if(authError) {
              console.error(authError);
              return next(authError);
          }
          if(!user) {
              return res.redirect(`/?loginError=${info.message}`)
          }
          return req.login(user, (loginError) => {
              if(loginError) {
                  console.error(loginError);
                  return next(loginError);
              }
              return res.redirect('/');
          });
      }) (req, res, next); //미들웨어 내 미들웨어는 (req, res, next)를 붙인다.
  }
};

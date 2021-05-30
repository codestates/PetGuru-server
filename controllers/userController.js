const { User } = require("../models/");
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
        } catch(error) { 
            // console.error(error);
            console.log('에러다!!!')
            next(error);
        }
      },
  login: (req, res, next) => {
    //   passport.authenticate('local', (authError, user, info) => {
    //       if(authError) {
    //           console.error(authError);
    //           return next(authError);
    //       }
    //       if(!user) {
    //           return res.redirect(`/?loginError=${info.message}`)
    //         // console.log('fuck')
    //       }
    //       return req.login(user, (loginError) => {
    //           if(loginError) {
    //               console.error(loginError);
    //               return next(loginError);
    //           }
    //           // 세션 쿠기를 브라우저로 보내준다
    //           return res.redirect('/');
    //       });
    //   }) (req, res, next); //미들웨어 내 미들웨어는 (req, res, next)를 붙인다.

    passport.authenticate('local', (err, user, info) => { // 서버에러, 성공 객체, 정보
        if (err) { // 서버 에러가 있는 경우
          // console.error(err);
          return next(err);
        }
        if (info) { // 로직 상 에러가 있는 경우 ??
          // console.log(info)
          // return res.status(401).send(info.reason); // 401: 허가되지 않음
          return res.status(401).json({message: info});
        }
        return req.login(user, (loginErr) => {
          // 로그인 저장 시 세션 사용
          if (loginErr) { // passport 로그인 검증
            console.error(loginErr);
            return next(loginErr);
          }
          // res.setHeadher('Cookie', 'asdkjfklasdjlkg') 보안의 위협을 최소화
          return res.status(200).json({message: "success post login"});
        })
      })(req, res, next);
  },

//   logout: (req, res, next) => {
//       req.logout();
//       console.log(req.session)
//       req.session.destroy();
//       console.log(req.session)
//       res.json({ "message": "Success post logout"})
    //   res.redirect('/');
//   }
};

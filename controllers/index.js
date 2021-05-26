const { User } = require("../models");
const bcrypt = require("bcrypt")

module.exports = {
  signup: async (req, res, next) => {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(hashedPassword)
      try {
          const exUser = await User.findOne({
              where: {
                  email: req.body.email
              }
          });
          if (exUser) {
              return res.status(409).send('이미 사용 중인 이메일입니다.');
          }
          await User.create({
              user_name: req.body.username,
              email: req.body.email,
              password: hashedPassword
          });
          res.status(200).send('ok');
        } catch {
            // console.error(error);
            console.log('에러다!!!')
            next(error);
        }
      }
};

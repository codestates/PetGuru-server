require("dotenv").config();

const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const { Missing } = require("../models");

module.exports = () => {
  const jwtStrategyOption = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  const jwtVerify = (jwtPayload, done) => {
    return Missing.findOne({ where: { id: jwtPayload.id } })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  };

  passport.use(new JWTStrategy(jwtStrategyOption, jwtVerify));
};
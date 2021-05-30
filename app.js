const fs = require("fs");
const https =  require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
// const config = require('./config')
const passport = require("passport");
const passportConfig = require("./passport");
const session = require("express-session");

const userRouter = require('./routes/users');
const db = require("./models/");
const express = require("express");
const { param } = require("./routes/users");
dotenv.config(); //dotenv 사용?

const app = express();


passportConfig(); // 패스포트 설정
app.use(express.json()); //front에서 json 형식의 데이터를 보냈을 때 데이터 req.body에 넣어준당
app.use(express.urlencoded({ extended : true})); // form submit 했을 때 데이터를 req.body에 넣어준당

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // javascript로 cookie에 접근하지 못하게 하는 옵션
    secure: false
  },
  secret: process.env.COOKIE_SECRET // 숨겨놔야함
  }));


app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('서버 실행')
})
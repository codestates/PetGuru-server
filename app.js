const express = require("express");
const fs = require("fs");
const https =  require("https");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
// const config = require('./config')

const passport = require("passport");
const passportConfig = require("./passport");
const db = require("./models/");

const userRouter = require('./routes/users');
const { param } = require("./routes/users");
const petController = require("./controllers/petController");
dotenv.config(); //dotenv 사용?

const app = express();


passportConfig(); // 패스포트 설정
app.use(express.json()); //front에서 json 형식의 데이터를 보냈을 때 데이터 req.body에 넣어준당
app.use(express.urlencoded({ extended : true})); // form submit 했을 때 데이터를 req.body에 넣어준당

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    secret: process.env.COOKIE_SECRET, // 숨겨놔야함
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true, // javascript로 cookie에 접근하지 못하게 하는 옵션
      secure: false
    },
  })
);


app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['OPTIONS', 'GET', 'POST' ,'PUT', 'DELETE'] //슬안: 메소드 업데이트
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Controllers

//user
app.use('/user', userRouter)

//pet
app.post("/pet/register", petController.register); //pet 등록
app.get("/pet/:pet_id", petController.info) //pet 정보조회
app.put("/pet/:id/edit", petController.edit) //pet 정보수정
app.delete("/pet/:id/delete", petController.delete) //pet 삭제



app.listen(3000, () => {
    console.log('서버 실행')
})
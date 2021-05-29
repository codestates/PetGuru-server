const fs = require("fs");
const https =  require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require('./routes/users');
const db = require("./models/");
const express = require("express");
const app = express();

app.use(express.json()); //front에서 json 형식의 데이터를 보냈을 때 데이터 req.body에 넣어준당
app.use(express.urlencoded({ extended : true})); // form submit 했을 때 데이터를 req.body에 넣어준당
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('서버 실행')
})
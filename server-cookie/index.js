const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const https = require('https');

const PORT = process.env.PORT || 4000;

const usersRouter = require('./routes/user');

const FILL_ME_IN = 'FILL_ME_IN';

app.use(express.json());
app.use(logger('dev'));

// TODO: 단계1. 적당한 cors 옵션을 작성해야 합니다. origin은 클라이언트(리액트) 서버의 주소이며 method 는 오로지 GET, POST, OPTION만 허용해야 합니다.
app.use(cors({}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRouter);

// 단계1. 아래 FILL_ME_IN을 mkcert로 발급한 인증서 pem파일, 키 pem 파일이름으로 교체해야 합니다.
// 이후 controller/users/login.js에서 단계2를 진행하세요.
https
  .createServer(
    {
      key: fs.readFileSync(__dirname + `/` + FILL_ME_IN, 'utf-8'),
      cert: fs.readFileSync(__dirname + `/` + FILL_ME_IN, 'utf-8'),
    },
    app
  )
  .listen(PORT);
module.exports = app;

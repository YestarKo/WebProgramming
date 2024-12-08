const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    //const userAgent = req.header('User-Agent');
    const paramID = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(`
        <h1>Express Server에서 응답한 결과입니다.</h1>
        <h3>Param ID: ${paramID}</h3>
        <h3>Param Password: ${paramPassword}</h3>
        <br><br><a href="/login.html">로그인 페이지로 돌아가기</a>
    `);
});
app.listen(3000);
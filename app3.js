const express = require('express');

const app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    req.user = 'KOYS';//req 객체에 user 속성 추가
    next();
});

app.use(function (req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함.');
    res.status(200).send(`<h1>${req.user} responds at Express Srever</h1>`);

});

app.listen(3000, () => {
    console.log('Server listen on 3000 port');
});
const express = require('express');
const app = require('express')();

//app5.js코드
// app.use(function (req, res, next) {
//     console.log('첫 번째 미들웨어에서 요청을 처리함.');
//     res.send({ name: 'KOYS', age: 25 });//JSON 형식으로 응답, 객체를 전달
//     // next()를 호출하지 않음
// });

//app6.js코드
app.get('/about', (req, res) => {
    console.log('두 번째 미들웨어에서 요청을 처리함, app6.js 예시 코드');
    res.redirect('https://hansung.ac.kr');//다른 웹 페이지로 리다이렉트
});

app.listen(3000, () => {
    console.log('Server listen on 3000 port');
});
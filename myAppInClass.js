const express = require('express');
const app = express();

app.use(function (req, res, next) {
    app.get('/', (req, res) => {
        console.log('첫 번째 미들웨어에서 요청을 처리함.');
        res.send('<h1>Hello World!!!!!!!!!!!!!!</h1>');
        next();
    })
});



// app.use(function (req, res, next) {
//     console.log('첫 번째 미들웨어에서 요청을 처리함.');
//     res.send('<h1>Hello World!!!!!!!!!!!!!!</h1>');
//     next();
// });

// //app6.js코드
// app.get('/about', (req, res) => {
//     console.log('두 번째 미들웨어에서 요청을 처리함, app6.js 예시 코드');
//     res.redirect('https://hansung.ac.kr');//다른 웹 페이지로 리다이렉트
// });

app.use((req, res) => {
    app.get('/about', (req, res) => {
        console.log('두 번째 미들웨어에서 요청을 처리함, app6.js 예시 코드');
        res.send('<h1>Hello World2!!</h1>');
    });
});

app.listen(3000, () => {
    console.log('Server listen on 3000 port');
});
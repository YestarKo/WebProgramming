const express = require('express');

const app = express();
app.set('port', 3000);//set the port
app.use((req, res, next) => {//미들웨어 등록
    res.status(200).send('<h1>Hello World</h1>');
});

app.listen(app.get('port'), () => {
    console.log(`start express app on port ${app.get('port')}`);
});


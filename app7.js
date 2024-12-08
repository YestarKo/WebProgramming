const express = require('express');
const app = express();

app.use(function (req, res, next) {
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    const paramID = req.query.id;

    res.status(200).send(`
        <h1>Express Server에서 응답한 결과입니다.</h1>
        <h3>User-Agent: ${userAgent}</h3>
        <h3>Param name: ${paramName}</h3>
        <h3>Param ID: ${paramID}</h3>
    `);
});
app.listen(3000);
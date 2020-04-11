const express = require('express');

const app = express();

app.get('/', function (req, res) {

    res.send('hello world nodejs');

});

app.listen(process.env.PORT || 3000);

module.exports = app;

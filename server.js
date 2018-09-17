'use strict';

const express = require('express');

const PORT = 1515;
const HOST = '127.0.0.1';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
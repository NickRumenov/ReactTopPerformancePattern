'use strict';

const express = require('express')
const app = express()
app.use(express.static('dist'))

const PORT = 8080
const HOST = '0.0.0.0'

app.get('/', function (req, res){
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
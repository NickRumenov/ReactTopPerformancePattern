'use strict';

const express = require('express')
const app = express()
app.use(express.static('dist'))

const PORT = 8080
const HOST = '0.0.0.0'

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'user1',
});

connection.connect((function(err) {
    if (err) {
        console.error('======================= error connecting: ' + err.stack);
        return;
    }
    console.log('======================= Linux and MySQL connected successfully !')
}));
connection.query('SHOW DATABASES;', function (error, results, fields) {
    if (error) throw error;
    console.log(results)
});
connection.end();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/top4', function (req, res){
    console.log(res);
    return res;
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
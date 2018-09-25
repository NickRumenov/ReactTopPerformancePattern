'use strict';

const express = require('express')
const mysql = require('mysql');

const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

const args = process.argv.slice(2)
const environment = args[0]

let appFolder = '';
if (environment === 'prod') {
    appFolder = 'dist';
} else if (environment === 'dev') {
    appFolder = 'src';
} else {
    console.log('You should add environment arguments as a first parameter')
    return;
}

app.use(express.static(appFolder))

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'user1',
});

connection.connect((function (err) {
    if (err) {
        console.error('======================= error connecting: ' + err.stack);
        return;
    }
    console.log('======================= Linux and MySQL connected successfully !')
}));
/*connection.query('SHOW DATABASES;', function (error, results, fields) {
    if (error) throw error;
});*/
connection.end();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/top4', function (req, success) {
    success.send('ss');
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
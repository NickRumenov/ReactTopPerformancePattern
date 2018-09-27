'use strict';

const express = require('express')
const mysql = require('mysql');
const cors = require('cors')

const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

/**
 * We expect an environment variable after the command for running the script
 * it should looks like: 'node server.js dev'
 * we have two environments so far - dev and prod
 */
/*const args = process.argv.slice(2)
const environment = args[0]

let appFolder = '';
if (environment === 'prod') {
    appFolder = 'dist';
} else if (environment === 'dev') {
    appFolder = 'src';
} else {
    console.log('You should add environment arguments as a first parameter')
    return;
}*/
app.use(cors())
app.use(express.static('dist'))

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'user1',
});

connection.connect((function (err) {
    if (err) {
        console.error('============= Error connecting: ' + err.stack);
        return;
    }
    console.log('============= Linux and MySQL connected successfully !')
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/top4', function (req, success) {

    let query = 'SELECT t.id, t.league AS leagueId, l.name AS league, t.name, s.position, s.played, s.gd, s.points \n' +
        'FROM stats.teams AS t \n' +
        'LEFT JOIN stats.stats AS s ON s.id = t.id\n' +
        'LEFT JOIN stats.leagues AS l ON t.league = l.id\n' +
        'ORDER BY s.position;';

    connection.query(query, function (error, response, fields) {
        if (error) throw error;
        success.send(response);
    });
})

app.listen(PORT, HOST)
console.log(`============= Running on http://${HOST}:${PORT}`)
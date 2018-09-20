'use strict';

const express = require('express')
const app = express()
app.use(express.static('dist'))

const PORT = 8080
const HOST = '0.0.0.0'

const mysql = require('mysql');
var connection = mysql.createConnection({
    host: '0.0.0.0',
    port: 3306,
    user: 'root',
    password: 'root',
});

connection.connect((function(err) {
    if (err) {
        console.error('=============================== error connecting: ' + err.stack);
        return;
    }
    console.log(connection)
}));
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
connection.end();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

    `GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'newpassword';`
`docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql`
`docker run -e MYSQL_PASSWORD=root MYSQL_USER=root -p 3306:3306 -d mysql --name mysql`
'docker run --name mysql-instance -e MYSQL_ROOT_PASSWORD=root MYSQL_PASSWORD=root MYSQL_USER=root MYSQL_DATABASE=stats -d mysql'
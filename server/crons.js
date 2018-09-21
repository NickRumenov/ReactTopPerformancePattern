const arg = process.argv.slice(2);

const fs = require('fs');
const json = fs.readFileSync('server/pl.json', 'utf8');
const data = JSON.parse(json);

const mysql = require('mysql');
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
    console.log('======================= Linux and MySQL connected successfully ! =======================')
}));
connection.query('SHOW DATABASES;', function (error, results, fields) {
    if (error) throw error;
});
connection.end();

switch (arg[0]) {
    case 'pl':

        let values = '';
        data.standings[0].table.map(function (x) {
            let currTeam = x;
            values += '(' + currTeam.position +
                ',\'' + currTeam.team.id +
                '\',\'' + currTeam.won +
                '\',\'' + currTeam.draw +
                '\',\'' + currTeam.lost +
                '\',\'' + currTeam.points +
                '\',\'' + currTeam.goalsFor +
                '\',\'' + currTeam.goalsAgainst +
                '\',\'' + currTeam.goalDifference +
                '\'),';
        })
        values = values.substring(0, values.length - 1);

        let req = 'INSERT INTO pl (position, id, played, draw, lost, won, gf, ga, gd) VALUES ' + values + ';';
        console.log(req)

        /*connection.query('INSERT INTO table_name (id, team, log0) VALUES ' + values + ';', function (error, results, fields) {
            if (error) throw error;


        });*/

        break;

}
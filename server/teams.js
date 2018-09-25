const args = process.argv.slice(2)
const leagueFile = args[0]

const fs = require('fs');
const json = fs.readFileSync('./' + leagueFile + '.json', 'utf8');
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

let values = '';
data.standings[0].table.map(function (x) {
    let currTeam = x;
    values += '(' + currTeam.team.id + ', 0, \'' + currTeam.team.name + '\', \'' + currTeam.team.crestUrl + '\'),';
})
values = values.substring(0, values.length - 1);

let req = 'INSERT INTO stats.teams (id, league, name, logo) VALUES ' + values + ';';
console.log(req)
connection.query(req, function (error, results, fields) {
    if (error) throw error;


});

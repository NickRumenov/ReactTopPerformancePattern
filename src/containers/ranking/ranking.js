import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './ranking.css';
import connect from "react-redux/es/connect/connect";
import config from "../../config";

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formatted4Leagues: {}
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.formatted4Leagues !== state.formatted4Leagues) {

            return {
                formatted4Leagues: props.formatted4Leagues
            };
        }
    }

    render() {

        let currentLeague = this.props.formatted4Leagues[this.props.leagueId];

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={'head'} numeric>Postion</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell numeric>Played</TableCell>
                            <TableCell numeric>GD</TableCell>
                            <TableCell numeric>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentLeague.map(team => {
                            return (
                                <TableRow key={team.id}>
                                    <TableCell className={'num-stat'} numeric>{team.position}</TableCell>
                                    <TableCell className={'team-name'}>{team.name}</TableCell>
                                    <TableCell className={'num-stat'} numeric>{team.played}</TableCell>
                                    <TableCell className={'num-stat'} numeric>{team.gd}</TableCell>
                                    <TableCell className={'num-stat'} numeric>{team.points}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}


const mapStateToProps = state => {
    const {top4Leagues} = config;
    let formatted4Leagues = [];

    top4Leagues.map(league => {
        formatted4Leagues[league.id] = [];
        if (Object.keys(state.top4Leagues).length > 0) {
            JSON.parse(state.top4Leagues).map(team => {
                if (league.id === team.leagueId) {
                    formatted4Leagues[league.id].push(team);
                }
            })
        }
    })

    return {
        formatted4Leagues
    }
}

export default connect(
    mapStateToProps
)(Ranking)
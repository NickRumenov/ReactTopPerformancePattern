import React, {Component} from 'react';
import {connect} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './ranking.css';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData(2, 'Frozen', 6, 24, 4.0),
    createData(3, 'Icecrea', 237, 9.0, 37, 4.3),
    createData(11, 'Eclair', 22, 16, 24, 6.0),
    createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(22, 'Gingerb', 356, 16.0, 49, 3.9),
];

class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        {rows.map(row => {
                            return (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell numeric>{row.calories}</TableCell>
                                    <TableCell numeric>{row.fat}</TableCell>
                                    <TableCell numeric>{row.carbs}</TableCell>
                                    <TableCell numeric>{row.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default Ranking
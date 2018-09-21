import React, {Component, PropTypes} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import config from '../../config.js';
import './content.css';

const {top4Leagues} = config;

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'wrapper'}>
                <Grid container spacing={40}>
                    {top4Leagues.map(league => (
                        <Grid item key={league.name} sm={6} md={4} lg={3}>
                            <Card className={'card'} >
                                <header className={'card-title'}>
                                    <img className={league.logo}/>
                                    <p className={'league-name'}>{league.name}</p>
                                </header>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Content;
import React, {Component, PropTypes} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Ranking from '../ranking/Ranking';
import config from '../../config.js';
import './content.css';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {top4Leagues} = config;

        return (
            <div className={'wrapper'}>
                <Grid container spacing={40}>
                    {top4Leagues.map(league => (
                        <Grid className={'content-grid'} item key={league.id} sm={6} md={4} lg={3}>
                            <Card className={'card'}>
                                <header className={'card-title'}>
                                    <img className={league.logo}/>
                                    <p className={'league-name'}>{league.name}</p>
                                </header>
                                <Ranking leagueId={league.id}/>
                            </Card>
                        </Grid>)
                    )}
                </Grid>
            </div>
        );
    }
}

export default Content
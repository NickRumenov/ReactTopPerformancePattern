import React, {Component, PropTypes} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Ranking from '../ranking/Ranking';
import config from '../../config.js';
import './content.css';
import connect from "react-redux/es/connect/connect";

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
                                <Ranking/>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
})

export default connect(
    mapStateToProps
)(Content)
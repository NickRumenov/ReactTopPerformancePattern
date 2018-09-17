import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
    render () {
        return <h1>React run properly1</h1>
    }
}

render(<App/>, document.getElementById('container'));
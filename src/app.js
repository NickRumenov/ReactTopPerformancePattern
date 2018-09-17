import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
    render () {
        return 'React run'
    }
}

render(<App/>, document.getElementById('container'));
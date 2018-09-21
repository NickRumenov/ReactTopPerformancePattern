import React, { Component } from 'react';
import Content from "./containers/content/content";
import Nav from "./containers/nav/nav";
import './index.css'

class App extends Component {
    render() {
        return (
            <div id={'container'}>
                <Nav/>
                <Content/>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Content from "./components/content/content";
import Nav from "./components/nav/nav";
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

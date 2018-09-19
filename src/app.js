import React, { Component } from 'react';
import Content from "./components/content/content";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './index.css'

class App extends Component {
    render() {
        return (
            <div id={'container'}>
                <Nav/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;

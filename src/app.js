import React, { Component } from 'react';
import Statistics from "./components/Statistics";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Statistics/>
                <Footer/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import config from '../../config.js';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Container,
    View,
    Mask
} from 'mdbreact';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log(arguments);
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="black" dark expand="md" scrolling>
                    <Container>
                        <NavbarBrand href="/">
                            <strong>React Football</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.onClick}/>
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                {config.menuOptions.map(item => (
                                    <NavItem key={item}>
                                        <NavLink to="#">{item}</NavLink>
                                    </NavItem>
                                ))}
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default Nav;
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <div>
                <Router>
                    <Navbar color="black" dark expand="md" scrolling>
                        <Container>
                            <NavbarBrand href="/">
                                <strong>React Football</strong>
                            </NavbarBrand>
                            <NavbarToggler onClick = { this.onClick } />
                            <Collapse isOpen = { this.state.collapse } navbar>
                                <NavbarNav left>
                                    <NavItem>
                                        <NavLink to="#">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">News</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Rankings</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Teams</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Livescore</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Schedule</NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </Router>
            </div>
        );
    }
}

export default Nav;
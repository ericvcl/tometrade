/* eslint no-unused-vars:0 */

import React from 'react';
import { BrowserRouter as Route, Link, NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="custom" variant="dark" expand="sm" sticky="top" className="nav-bar">
            <Navbar.Brand as={Link} exact to="/" className="logo"><img
                src="img/icon.png"
                height="45"
                width="45"
                className="mr-3"
                alt="Tome Trade Logo"
            />TomeTrade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/profile" activeClassName="active">Profile</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
                </Nav>
                <Navbar.Brand as={Link} exact to="/profile" className="nav-profile-pic"><img
                    src="img/default-profile.jpg"
                    height="45"
                    width="45"
                    className="mr-3 profile-pic-navbar"
                    alt="User's profile"
                /></Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
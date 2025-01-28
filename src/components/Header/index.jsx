import React from 'react';
import {  Navbar, Nav, Button } from 'react-bootstrap';


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">

          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav>Welcome, Jackson !</Nav>
                </Nav>
                <Nav >
                    <Button variant='outline-danger'>Sign Out</Button>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );
}

export default Header;

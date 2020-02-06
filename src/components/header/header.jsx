import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

export const Header = () => (
    <Navbar bg={'dark'}>
        <Navbar.Brand href='/'><h1>Star-DB</h1></Navbar.Brand>
        <Nav>
            <LinkContainer to='/'><Nav.Link>Peoples</Nav.Link></LinkContainer>
            <LinkContainer to='/planets'><Nav.Link>Planets</Nav.Link></LinkContainer>
            <LinkContainer to='/starships'><Nav.Link>Starships</Nav.Link></LinkContainer>
        </Nav>
    </Navbar>
)
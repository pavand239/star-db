import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => (
    <Navbar bg={'dark'}>
        <Navbar.Brand href='/'><h1>Star-DB</h1></Navbar.Brand>
        <Nav>
            <Nav.Link>Peoples</Nav.Link>
            <Nav.Link>Planets</Nav.Link>
            <Nav.Link>Starships</Nav.Link>
        </Nav>
    </Navbar>
)
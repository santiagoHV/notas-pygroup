import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant={'dark'} expand="lg">
            <Container>
                <Navbar.Brand><strong>PYGROUP - 2021</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
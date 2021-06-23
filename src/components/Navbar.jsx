import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                Swapiku
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="/movielist">
                    Films
                </Nav.Link>
                
                <Nav.Link as={Link} to="/characterlist">
                    People
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
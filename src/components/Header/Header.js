import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                    00 HOME
        </Link>
                <Link className="nav-link" to="/about">
                    01 ABOUT
        </Link>
                <Link className="nav-link" to="/projects">
                    02 PROJECTS
        </Link>
                <Link className="nav-link" to="/contact">
                    03 CONTACT
        </Link>
            </Nav>
        </Navbar>
    );
}

export default Header;

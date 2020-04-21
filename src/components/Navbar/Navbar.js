import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Navigation = () => (
    <Navbar className="bg-dark navbar-dark" expand="lg">
        <Navbar.Brand href="/" className="text-light"><strong>Warehouse</strong>Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end text-light">
            <Nav>
                <Link to="/products/create" className="text-light" style={{textDecoration: 'none'}}>New Product</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);


export default Navigation;
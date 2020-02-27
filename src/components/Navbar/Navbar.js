import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const navbar = () => (
    <Navbar className="bg-dark navbar-dark" expand="lg">
        <Navbar.Brand href="/" className="text-light"><strong>Warehouse</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end text-light">
            <Nav className="">
                <Nav.Link href="/" className="text-light">New Product</Nav.Link>
                {/*<Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;
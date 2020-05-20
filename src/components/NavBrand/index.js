import React from 'react';
import './style.css';
import { Col, Navbar } from 'react-bootstrap';

function NavBrand() {
    return (
        <Col md={4}>
            <div className="text-center text-md-left">
                <Navbar.Brand
                    className="text-center rounded-circle mx-0"
                    href="/"
                    title="Home"
                    id="logo-name"
                >
                    JL
                </Navbar.Brand>
            </div>
        </Col>
    );
}

export default NavBrand;

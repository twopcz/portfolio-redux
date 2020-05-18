import React from 'react';
import './style.css';
import { Col, Navbar } from 'react-bootstrap';

function NavBrand() {
  return (
    <Col>
      <div className='text-center text-md-left'>
        <Navbar.Brand
          className='text-center rounded-circle'
          href='#home'
          title='Home'
          id='logo-name'
        >
          JL
        </Navbar.Brand>
      </div>
    </Col>
  );
}

export default NavBrand;

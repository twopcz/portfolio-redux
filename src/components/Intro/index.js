import React from 'react';
import './style.css';
import { Row } from 'react-bootstrap';

function Intro() {
  return (
    <Row id='intro' className='mt-5'>
      <div className='my-auto px-5'>
        <h1 className='display-3 pt-5'>JUSTIN LE</h1>
        <p className='lead'>
          full stack dev based in <span id='city'>seattle, washington</span> with a passion for
          creation & design
        </p>
      </div>
    </Row>
  );
}

export default Intro;

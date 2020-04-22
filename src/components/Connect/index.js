import React from 'react';
import { Col } from 'react-bootstrap';

function Connect() {
  return (
    <Col md={12} className='pb-3 d-flex justify-content-between'>
      <Col md={4} className='pb-3'>
        <h5 className='font-weight-bold footer-headers'>JUSTIN LE</h5>
        <div>
          <span className='about-me-info bio'>
            A student of the University of Washington. When I am not coding or
            designing, I also enjoy cooking, eating, photography and sports!
            #GOHAWKS
          </span>
        </div>
      </Col>
      <Col md={4} className='pb-3'>
        <h5 className='font-weight-bold footer-headers'>NAVIGATION</h5>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            +{' '}
            <a className='navigation-info' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            +
            <a className='navigation-info' href='/'>
              About Me
            </a>
          </li>
          <li className='nav-item'>
            +{' '}
            <a className='navigation-info' href='/'>
              Portfolio
            </a>
          </li>
          <li className='nav-item'>
            +
            <a
              className='navigation-info'
              href='https://drive.google.com/open?id=1Lfk7fuRK00QHNPZGsmHmHFtbw0MWiwHb'
              target='_blank'
              rel='noopener noreferrer'
            >
              Résumé
            </a>
          </li>
        </ul>
      </Col>
      <Col md={4} className='d-flex flex-column'>
        <h5 className='font-weight-bold footer-headers'>CONTACT</h5>
        <div>
          <i className='fas fa-envelope'></i>
          <a
            href='mailto:me@justinle.page'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-info'
          >
            me@justinle.page
          </a>
        </div>
        <div className='pb-3'>
          <i className='fas fa-mobile-alt'></i>
          <a href='tel:425-610-7038' className='contact-info'>
            (425)-610-7038
          </a>
        </div>
        <h5 className='font-weight-bold footer-headers'>CONNECT</h5>
        <div>
          <i className='fab fa-github-alt'></i>
          <a href='https://github.com/twopcz' className='contact-info'>
            GitHub
          </a>
        </div>
        <div>
          <i class='fab fa-linkedin'></i>
          <a href='https://linkedin.com/in/itsjustinle' class='contact-info'>
            Linkedin
          </a>
        </div>
      </Col>
    </Col>
  );
}

export default Connect;

import React from 'react';
import NavBrand from '../NavBrand';
import NavLink from '../NavLink';
import { Navbar } from 'react-bootstrap';

import './style.css';

const pages = [
  {
    page: 'about',
    link: 'about',
    title: 'About Page',
  },
  {
    page: 'projects',
    link: 'projects',
    title: 'Projects Page',
  },
  {
    page: 'contact',
    link: 'contact',
    title: 'Contact Pages',
  },
];

const connections = [
  {
    page: <i className='fab fa-github'></i>,
    link: 'https://github.com/twopcz',
    title: 'GitHub',
    target: '_blank',
  },
  {
    page: <i className='fab fa-linkedin'></i>,
    link: 'https://www.linkedin.com/in/itsjustinle/',
    title: 'LinkedIn',
    target: '_blank',
  },
  {
    page: <i className='fas fa-file'></i>,
    link: 'https://drive.google.com/open?id=1Lfk7fuRK00QHNPZGsmHmHFtbw0MWiwHb',
    title: 'Résumé',
    target: '_blank',
  },
];

function Nav() {
  return (
    <Navbar fixed='top' className='shadow' id='top-nav'>
      <div className='d-flex flex-sm-row flex-column w-100 justify-content-between'>
        <NavBrand />
        <NavLink
          ul='nav justify-content-center font-weight-bold'
          li='nav-link'
          links={pages}
        />
        <NavLink
          ul='nav justify-content-center float-md-right'
          li='nav-link'
          links={connections}
        />
      </div>
    </Navbar>
  );
}

export default Nav;

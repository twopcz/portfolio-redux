import React from 'react';
// import { Link } from 'react-router-dom';
import NavBrand from '../NavBrand';
import NavLink from '../NavLink';

function Nav() {
  const pages = [
    {
      page: 'about',
      link: 'about',
      alt: 'About Page'
    },
    {
      page: 'projects',
      link: 'projects',
      alt: 'Projects Page'
    },
    {
      page: 'contact',
      link: 'contact',
      alt: 'Contact Pages'
    }
  ];

  const connections = [
    {
      page: <i className="fab fa-github"></i>,
      link: 'https://github.com/twopcz',
      alt: 'GitHub',
      target: '_blank'
    },
    {
      page: <i className="fab fa-linkedin"></i>,
      link: 'https://www.linkedin.com/in/itsjustinle/',
      alt: 'LinkedIn',
      target: '_blank'
    },
    {
      page: <i className="fas fa-file"></i>,
      link: 'https://drive.google.com/open?id=1Lfk7fuRK00QHNPZGsmHmHFtbw0MWiwHb',
      alt: 'Resume',
      target: '_blank'
    }
  ];

  return (
    <nav className='navbar navbar-light bg-dark rounded-bottom'>
      <div className='d-flex w-100'>
        <NavBrand />
        <NavLink ul='nav justify-content-center font-weight-bold' li='nav-link' links={pages} />
        <NavLink ul='nav justify-content-center float-right' li='nav-link' links={connections} />
      </div>
    </nav>
  );
}

export default Nav;

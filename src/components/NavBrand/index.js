import React from 'react';
import './style.css';

function NavBrand() {
  return (
    <div className='col-md-4'>
      <a
        className='navbar-brand text-center rounded-circle float-left'
        href='https://justinle.page'
        id='logo-name'
      >
        JL
      </a>
    </div>
  );
}

export default NavBrand;
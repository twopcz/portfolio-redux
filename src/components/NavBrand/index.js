import React from 'react';
import './style.css';

function NavBrand() {
  return (
    <div className='col-md-4'>
      <div className='text-center text-md-left'>
        <a
          className='navbar-brand text-center rounded-circle'
          href='https://justinle.page'
          id='logo-name'
        >
          JL
        </a>
      </div>
    </div>
  );
}

export default NavBrand;

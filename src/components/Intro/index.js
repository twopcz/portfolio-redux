import React from 'react';

const divStyle = {
  background: 'red',
  height: '85vh',
};

function Intro() {
  return (
    <div className='row' style={divStyle}>
      <div className='col-md-6 my-auto px-5'>
        <h1 className='display-4'>
          <span className='font-weight-bold'>JUSTIN LE</span>
        </h1>
        <p className='text-muted'>
          a full stack dev who is passionate about style and design
        </p>
      </div>
      <div className='col-md-6'></div>
    </div>
  );
}

export default Intro;

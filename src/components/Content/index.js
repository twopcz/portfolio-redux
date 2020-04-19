import React from 'react';
import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';

function Content() {
  return (
    <div className='container-fluid'>
      <Intro />
      <Projects />
      <About />
    </div>
  );
}

export default Content;

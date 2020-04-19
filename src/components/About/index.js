import React from 'react';

function About() {
  return (
    <div className='row justify-content-center' id='about-me-container'>
      <div className='col-md-9 py-5'>
        <h1 className='font-weight-bold pb-3' id='about-me'>
          ABOUT ME
        </h1>
        <div className='row d-flex align-items-center'>
          <div className='col-md-4'>
            <img
              src='assets/images/profile_pic.jpg'
              className='img-fluid rounded'
              alt='profile-picture'
            />
          </div>
          <div className='col-md-7'>
            <p className='pt-4 bio'>
              Born and raised in Seattle, WA, I have always had a penchant for
              building and creating things. Always curious about how things
              functioned, <s>destroying</s> disassembling and reconstructing
              everything I could get my hands on was more than just a phase.
              That later evolved into a hobby centered around
              computers/technology and becoming a developer was the next logical
              transition. I really enjoy designing/creating things that look
              great and function well from the ground up.
              <br />
              <br />
              Outside of the computer screen, you can find me working to stay
              active in the gym since I am otherwise finding my next favorite
              hole in the wall restaurant!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import './style.css';

const projectsOne = [{}];
const projectsTwo = [{}];

function Projects() {
  return (
    <div>
      <div className='row justify-content-center' id='projects-top'>
        <div className='container d-flex flex-row project-container'>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center py-4' id='projects-bottom'>
        <div className='container d-flex flex-row project-container'>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
          <div className='col-md-4'>
            <img
              className='img-fluid'
              src='https://via.placeholder.com/800x1000'
            ></img>
            <div className='project-titles text-center'>Test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

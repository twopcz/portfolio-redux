import React from 'react';
import ProjectRow from '../ProjectRow';
import './style.css';

const rowOne = [
  {
    title: 'PROJECT 3',
    link: '',
    image: 'https://via.placeholder.com/800x1000',
    alt: `project-1`,
  },
  {
    title: 'SNEAKER STORE CRM',
    link: 'https://agile-headland-04774.herokuapp.com/',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/crm-ss.png?raw=true',
    alt: `project-3`,
  },
  {
    title: 'CUTIE BURGER',
    link: 'https://github.com/twopcz/Burger',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/cb-ss.png?raw=true',
    alt: `project-3`,
  }
];

const rowTwo = [
  {
    title: 'EMPLOYEE DIRECTORY',
    link: 'https://github.com/twopcz/Employee-Directory',
    image: 'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/ed-ss.png?raw=true',
    alt: `project-4`,
  },
  {
    title: 'BUDGET TRACKER',
    link: 'https://justin-budget-tracker.herokuapp.com/',
    image: 'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/bt-ss.png?raw=true',
    alt: `project-5`,
  },
  {
    title: 'TEAM SUMMARY GENERATOR',
    link: 'https://github.com/twopcz/Team-Summary-Generator',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/cli-ss.png?raw=true',
    alt: `project-6`,
  }
];

function Projects() {
  return (
    <div className='Projects'>
      <div className='row justify-content-center py-3 projects-heading' id='projects-header'>
        <span>projects</span>
      </div>
      <ProjectRow projects={rowOne} rowID='projects-top'/>
      <ProjectRow projects={rowTwo} rowID='projects-bottom'/>
      <div className='row justify-content-center py-3 projects-heading'>
        <span>more on github</span>
      </div>
    </div>
  );
}

export default Projects;

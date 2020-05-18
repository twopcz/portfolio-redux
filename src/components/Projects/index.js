import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const portfolio = [
  {
    title: 'PROJECT 3',
    github: 'https://github.com/twopcz/',
    deployed: 'https://github.com/twopcz/project-2',
    image: 'https://via.placeholder.com/800x1000',
    alt: 'project-3',
    description: 'n/a',
  },
  {
    title: 'SNEAKER STORE CRM',
    github: 'https://github.com/twopcz/project-2',
    deployed: 'https://agile-headland-04774.herokuapp.com/',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/crm-ss.png?raw=true',
    alt: 'sneaker-crm',
    description: '',
  },
  {
    title: 'CUTIE BURGER',
    github: 'https://github.com/twopcz/Burger',
    deployed: 'https://cutie-burger.herokuapp.com/',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/cb-ss.png?raw=true',
    alt: 'burger-app',
    description: '',
  },
  {
    title: 'EMPLOYEE DIRECTORY',
    github: 'https://github.com/twopcz/Employee-Directory',
    deployed: 'https://github.com/twopcz/Employee-Directory',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/ed-ss.png?raw=true',
    alt: 'employee-app',
    description: '',
  },
  {
    title: 'BUDGET TRACKER',
    github: 'https://github.com/twopcz/Budget-Tracker',
    deployed: 'https://justin-budget-tracker.herokuapp.com/',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/bt-ss.png?raw=true',
    alt: 'budget-app',
    description: '',
  },
  {
    title: 'TEAM SUMMARY GENERATOR',
    github: 'https://github.com/twopcz/Team-Summary-Generator',
    deployed: '',
    image:
      'https://github.com/twopcz/portfolio-redux/blob/Dev/src/assets/images/cli-ss.png?raw=true',
    alt: 'team-summary-app',
    description: '',
  },
];

function Projects(props) {
  return (
    <div>
      <Container fluid>
        <Row>
        {portfolio.map(projects => (
            <Col md={4} key={projects.title}>
                <h1>{projects.title}</h1>
                <a href={projects.deplyed}><img className='img-fluid' src={projects.image} alt={projects.alt}></img></a>
                <p>{projects.description}</p>
                <a href={projects.github}>GITHUB</a>
            </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

import './style.css';
import ProjectRow from '../ProjectRow';
import React from 'react';
import { Row } from 'react-bootstrap';

const rowOne = [
    {
        title: 'ORDER UP',
        link: 'https://order-up-jkrtr.herokuapp.com/',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/update/src/assets/images/ou-ss.png?raw=true',
        alt: `project-1`
    },
    {
        title: 'SNEAKER STORE CRM',
        link: 'https://agile-headland-04774.herokuapp.com/',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/crm-ss.png?raw=true',
        alt: `project-2`
    },
    {
        title: 'CUTIE BURGER',
        link: 'https://cutie-burger.herokuapp.com/',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cb-ss.png?raw=true',
        alt: `project-3`
    }
];

const rowTwo = [
    {
        title: 'EMPLOYEE DIRECTORY',
        link: 'https://github.com/twopcz/Employee-Directory',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ed-ss.png?raw=true',
        alt: `project-4`
    },
    {
        title: 'BUDGET TRACKER',
        link: 'https://justin-budget-tracker.herokuapp.com/',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/bt-ss.png?raw=true',
        alt: `project-5`
    },
    {
        title: 'TEAM SUMMARY GENERATOR',
        link: 'https://github.com/twopcz/Team-Summary-Generator',
        image:
            'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cli-ss.png?raw=true',
        alt: `project-6`
    }
];

function ProjectPreview() {
    return (
        <Row className="Projects d-flex flex-column" id="projects">
            <div className="text-center py-3" id="projects-header">
                <a href="#/projects" className="text-dark projects-heading">
                    projects
                </a>
                <div>
                    <small>(click 'projects' for more details)</small>
                </div>
            </div>
            <ProjectRow projects={rowOne} rowID="projects-top" />
            <ProjectRow projects={rowTwo} rowID="projects-bottom" />
        </Row>
    );
}

export default ProjectPreview;

import './style.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function ProjectPage() {
    const projects = [
        {
            name: `ORDER UP`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ou-ss-2.png?raw=true',
            link: 'https://order-up-jkrtr.herokuapp.com/',
            repo: 'https://github.com/twopcz/order-up',
            tech: 'MongoDB, Express, React and Node',
            description: `A Restaurant Management System (RMS) that allows the admin to manage the inventory, employees and their shifts, table reservations, and food order tickets. It also incorporates user authentication and permission restrictions for specific routes in the web app. Developed as a Final Project with four other student from the University of Washington Coding Bootcamp.`
        },
        {
            name: `SNEAKER STORE`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/jlr-ss-2.png?raw=true',
            link: 'http://jlr-sneaker-crm.herokuapp.com/',
            repo: 'https://github.com/twopcz/jlr-sneaker-crm',
            tech: 'MySQL, Express, React.JS, and Node',
            description: `A Customer Relationship Management (CRM) system for a Sneaker Store. This CRM presents visual data with Chart.js, includes inventory/vendor management, user authentication, and generates reports. Developed during my classes at the Univeristy of Washington Coding Bootcamp in collaboration with two other students. This project was built prior to being taught React in class as our group decided to tackle self-learning as an additional challenge.`
        },
        {
            name: `CUTIE BURGER`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cb-ss-2.png?raw=true',
            link: 'https://cutie-burger.herokuapp.com/',
            repo: 'https://github.com/twopcz/Burger',
            tech: 'MySQL, Express, Node, and Handlebars',
            description: `A web application that allows the user to create a list of burgers that they would like to eat. The application demonstates usage of the MVC (Model-View-Controller) design pattern, along with a self-created ORM (Object-Relational-Mapping) to improve altering/readability of the code. It also demonstrates all of the CRUD (Create, Read, master, and Delete) operations.`
        },
        {
            name: `EMPLOYEE DIRECTORY`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ed-ss-2.png?raw=true',
            repo: 'https://github.com/twopcz/Employee-Directory',
            tech: 'React and Node',
            description: `An employee directory with data generated from an API call to randomuser.me. The data is displayed in a table that can be sorted and filtered by name, phone, email and birthday.`
        },
        {
            name: `BUDGET TRACKER`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/bt-ss-2.png?raw=true',
            link: 'https://justin-budget-tracker.herokuapp.com/',
            repo: 'https://github.com/twopcz/Budget-Tracker',
            tech: `MongoDB, Express and Node`,
            description: `A budget tracker application used to help the user visualize their spending habits. The web application can also be installed as a PWA (Progessive Web App) for online/offline use, so that the user can master their budget if they are not able to be connected to the internet.`
        },
        {
            name: `TEAM SUMMARY GENERATOR`,
            image:
                'https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/tsg-ss-2.png?raw=true',
            repo: 'https://github.com/twopcz/Team-Summary-Generator',
            tech: `Node`,
            description: `This application creates a .html file based on the user's input via the command line. The web page displays the team's composition made up of the manager, the engineers, and the interns with their relevant information in an easily digestable format.`
        }
    ];

    return (
        <Container fluid className="pt-md-5 project-page">
            {projects.map((project, index) => (
                <Row
                    className="justify-content-center"
                    key={`project-row-${index}`}
                >
                    <Col
                        md={10}
                        className="d-flex flex-column flex-md-row py-5"
                        key={`project-container-${index}`}
                    >
                        <Col key={`project-pic-${index}`}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="img-fluid project-container"
                                    src={project.image}
                                    alt={`${project.name}-screenshot`}
                                ></img>
                            </a>
                        </Col>
                        <Col className="my-auto" key={`project-desc-${index}`}>
                            <div>
                                <h2 className="project-heading">
                                    {project.name}
                                </h2>
                            </div>
                            <div>
                                <small className="text-muted">
                                    {project.tech}
                                </small>
                            </div>
                            <div>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="badge badge-secondary"
                                >
                                    Repository
                                </a>
                            </div>
                        </Col>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

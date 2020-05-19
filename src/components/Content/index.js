import './style.css';
import About from '../About';
import { Container } from 'react-bootstrap';
import Intro from '../Intro';
import Projects from '../Projects';
import React from 'react';

function Content() {
    return (
        <Container fluid className="pt-5 pt-md-0">
            <Intro />
            <Projects />
            <About />
        </Container>
    );
}

export default Content;

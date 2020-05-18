import React from 'react';
import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import { Container } from 'react-bootstrap';

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

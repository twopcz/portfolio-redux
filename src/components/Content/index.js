import './style.css';
import Info from '../Info';
import { Container } from 'react-bootstrap';
import Intro from '../Intro';
import ProjectPreview from '../ProjectPreview';
import React from 'react';

function Content() {
    return (
        <Container fluid className="pt-5 pt-md-0">
            <Intro />
            <ProjectPreview />
            <Info />
        </Container>
    );
}

export default Content;

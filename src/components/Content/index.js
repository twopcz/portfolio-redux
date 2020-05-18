import React from 'react';
import Intro from '../Intro';
import About from '../About';
import ProjectPreviews from '../ProjectPreviews';
import Connect from '../Connect';
import { Container } from 'react-bootstrap';

import Projects from '../Projects';

function Content() {
  return (
    <Container fluid>
      <Intro />
      {/* <ProjectPreviews /> */}
      <Projects />
      <About />
      <Connect />
    </Container>
  );
}

export default Content;

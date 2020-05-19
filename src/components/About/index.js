import './style.css';
import { Col, Row } from 'react-bootstrap';
import React from 'react';

function About() {
    return (
        <Row className="justify-content-center">
            <Col md={12} className="py-3">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <p className="pt-4 text-center">
                            Born and raised in Seattle, WA, I have always had a
                            penchant for building and creating things. Always
                            curious about how things functioned,{' '}
                            <s>destroying</s> disassembling and reconstructing
                            everything I could get my hands on was more than
                            just a phase. That later evolved into a hobby
                            centered around computers/technology and becoming a
                            developer was the next logical transition. I really
                            enjoy designing/creating things that look great and
                            function well from the ground up.
                            <br />
                            <br />
                            Outside of the computer screen, you can find me
                            working to stay active in the gym or getting my
                            hands dirty underneath the hood of a car. I am
                            always looking for new hobbies to pick up and keep
                            me occupied outside of the office.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default About;

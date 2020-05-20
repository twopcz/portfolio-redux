import './style.css';
import { Col, Row } from 'react-bootstrap';
import React from 'react';

function Info() {
    return (
        <Row className="justify-content-center" id="about">
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
                            function well from the ground up.{' '}
                            <a
                                href="/contact"
                                className="text-decoration-none text-dark font-weight-bold"
                            >
                                Let's build something together!
                            </a>
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Info;

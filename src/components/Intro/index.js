import React from 'react';
import './style.css';
import { Col, Row } from 'react-bootstrap';

function Intro() {
    return (
        <Row id="intro" className="mt-5 py-3 d-flex flex-column h-100">
            <Col className="my-auto px-5">
                <h1 className="display-3 pt-5">JUSTIN LE</h1>
            </Col>
            <Col className="px-5">
                <p className="lead">
                    full stack dev based in{' '}
                    <span id="city">seattle, washington</span> with a passion
                    for creation & design
                </p>
            </Col>
        </Row>
    );
}

export default Intro;

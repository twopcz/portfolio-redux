import './style.css';
import { Col, Row } from 'react-bootstrap';
import React from 'react';

function Info(props) {
    return (
        <Row className="justify-content-center py-3" id={props.id}>
            <div className="text-center py-3 projects-heading text-dark">
                {props.heading}
            </div>
            <Col md={12}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <p className="text-center">{props.body}</p>
                        <div className="text-center">{props.links}</div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Info;

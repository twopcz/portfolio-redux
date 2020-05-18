import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

export default function ComponentLink(props) {
    return (
        <Col>
            <ul className={props.ul}>
                {props.links.map((data, index) => (
                    <LinkContainer to={data.link} key={`nav-link-${index}`}>
                        <li className={props.li} key={`${index}-li`}>
                            <a href={data.link} title={data.title}>
                                {data.page}
                            </a>
                        </li>
                    </LinkContainer>
                ))}
            </ul>
        </Col>
    );
}

import React from 'react';
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function ComponentLink(props) {
    return (
        <Col>
            <ul className={props.ul}>
                {props.links.map((data, index) => (
                    <LinkContainer to={data.link}>
                        <li className={props.li} key={`${index}-li`}>
                            <a href={data.link} title={data.title}>
                                {data.page}
                            </a>
                            {/* {data.page} */}
                        </li>
                    </LinkContainer>
                ))}
            </ul>
        </Col>
    );
}

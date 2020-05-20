import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';
import React from 'react';

export default function ComponentLink(props) {
    return (
        <Col>
            <ul className={props.ul}>
                {props.links.map((data, index) =>
                    data.page === 'about' || data.page === 'contact' ? (
                        <li className={props.li} key={`${index}-li`}>
                            <Link
                                to={data.page}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                key={`about-link`}
                            >
                                {data.page}
                            </Link>
                        </li>
                    ) : (
                        <LinkContainer to={data.link} key={`nav-link-${index}`}>
                            <li className={props.li} key={`${index}-li`}>
                                <a href={data.link} title={data.title}>
                                    {data.page}
                                </a>
                            </li>
                        </LinkContainer>
                    )
                )}
            </ul>
        </Col>
    );
}

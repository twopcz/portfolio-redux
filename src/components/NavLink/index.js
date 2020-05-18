import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function NavLink(props) {
    return (
        <Col>
            <ul className={props.ul}>
                {props.links.map((data, index) => (
                    <li className={props.li} key={`${index}-li`}>
                        <a href={data.link} title={data.title}>
                            {data.page}
                        </a>
                    </li>
                ))}
            </ul>
        </Col>
    );
}

export default NavLink;

NavLink.propTypes = {
    alt: PropTypes.string,
    li: PropTypes.string,
    link: PropTypes.string,
    links: PropTypes.array.isRequired,
    page: PropTypes.string,
    target: PropTypes.string,
    ul: PropTypes.string
};

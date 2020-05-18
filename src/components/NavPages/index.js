import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Contact from '../Contact';

function NavPages(props) {
  return (
      <Col>
        <ul className={props.ul}>
          {props.links.map((data, index) => (
            <li className={props.li} key={`${index}-li`}>
              <Link to={data.link}>{data.page}</Link>
            </li>
          ))}
        </ul>
      </Col>
  );
}

export default NavPages;

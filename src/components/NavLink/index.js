import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props) {
  return (
    <div className='col-md-4'>
      <ul className={props.ul}>
        {props.links.map((data, index) => (
          <li className={props.li} key={`${index}-li`}>
            <a href={data.link} title={data.title} target={data.target}>{data.page}</a>
          </li>
        ))}
      </ul>
    </div>
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
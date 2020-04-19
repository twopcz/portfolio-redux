import React from 'react';

function NavLink(props) {
  return (
    <div className='col-md-4'>
      <ul className={props.ul}>
        {props.links.map((data, index) => (
          <li className={props.li} key={`${index}-li`}>
            <a href={data.link} alt={data.alt} target={data.target}>{data.page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavLink;

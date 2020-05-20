import './style.css';
import ComponentLink from '../ComponentLink';
import { Navbar } from 'react-bootstrap';
import NavBrand from '../NavBrand';
import NavLink from '../NavLink';
import React from 'react';

const connections = [
    {
        page: <i className="fab fa-github"></i>,
        link: 'https://github.com/twopcz',
        title: 'GitHub'
    },
    {
        page: <i className="fab fa-linkedin"></i>,
        link: 'https://www.linkedin.com/in/itsjustinle/',
        title: 'LinkedIn'
    },
    {
        page: <i className="fas fa-file"></i>,
        link: 'https://resume.justinle.page',
        title: 'Résumé'
    }
];

function Nav(props) {
    return (
        <Navbar fixed="top" className="shadow" id="top-nav">
            <div className="d-flex flex-sm-row flex-column w-100 justify-content-between">
                <NavBrand />
                <ComponentLink
                    ul="nav justify-content-center font-weight-bold"
                    li="nav-link"
                    links={props.pages}
                />
                <NavLink
                    ul="nav justify-content-center float-md-right"
                    li="nav-link"
                    links={connections}
                />
            </div>
        </Navbar>
    );
}

export default Nav;

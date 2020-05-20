import Content from '../../components/Content';
import Nav from '../../components/Nav';
import React from 'react';

function Home() {
    const pages = [
        {
            page: 'about'
        },
        {
            page: 'projects'
        },
        {
            page: 'contact'
        }
    ];

    return (
        <div className="Home">
            <Nav pages={pages} />
            <Content />
        </div>
    );
}

export default Home;

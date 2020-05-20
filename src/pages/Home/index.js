import Content from '../../components/Content';
import Nav from '../../components/Nav';
import React from 'react';

function Home() {
    const pages = [
        {
            page: 'about',
            link: '/about',
            title: 'About Page'
        },
        {
            page: 'projects',
            link: '/projects',
            title: 'Projects Page'
        },
        {
            page: 'contact',
            link: '/contact',
            title: 'Contact Pages'
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

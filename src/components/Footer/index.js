import './style.css';
import { Link } from 'react-scroll';
import React from 'react';

function Footer() {
    return (
        <>
            <div className="text-center scroll-up pt-5 pb-2">
                <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-136}
                    duration={500}
                    key={`about-link`}
                >
                    <i className="fas fa-angle-double-up"></i>
                </Link>
            </div>
            <footer className="footer text-center" id="copyright-container">
                <div>
                    <span>
                        copyright &copy; 2020 <b>|</b> handcrafted by <b>me</b>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;

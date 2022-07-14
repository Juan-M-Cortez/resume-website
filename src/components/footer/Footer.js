import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-nav">
            <div className='navbar-container'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><a className='nav-links'>Home</a></li>
                    <li className='navbar-li'><a className='nav-links'>Resume</a></li>
                    <li className='navbar-li'><a className='nav-links'>Projects</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
import Linkedin from '../../animation/icons8-linkedin.gif';
import Instagram from '../../animation/icons8-instagram.gif';
import Github from '../../animation/icons8-github.gif';
import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar-nav">
            <div className='navbar-container'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><a className='nav-links'>Home</a></li>
                    <li className='navbar-li'><a className='nav-links'>Resume</a></li>
                    <li className='navbar-li'><a className='nav-links'>Projects</a></li>
                </ul>
                <ul className='navbar-icon-container'>
                    <li><a className='icon-anchor'><img className='linkin' src={Linkedin} alt="linkedin"/></a></li>
                    <li><a className='icon-anchor'><img className='github' src={Github} alt="github"/></a></li>
                    <li><a className='icon-anchor'><img className='instagram' src={Instagram} alt="instagram"/></a></li>
                </ul>

            </div>
        </nav>

    )
}

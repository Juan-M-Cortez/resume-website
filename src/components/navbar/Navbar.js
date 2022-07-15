import Linkedin from '../../animation/icons8-linkedin.gif';
import LinkedinPNG from '../../pictures/Linkedin-icon.png';
import Instagram from '../../animation/icons8-instagram.gif';
import InstagramPNG from '../../pictures/Instagram-icon.png';
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
                    <li><a className='icon-anchor'><img className='linkin' src={LinkedinPNG} alt="linkedin"/></a></li>
                    <li><a className='icon-anchor'><img className='github' src={Github} alt="github"/></a></li>
                    <li><a className='icon-anchor'><img className='instagram' src={InstagramPNG} alt="instagram"/></a></li>
                    <svg className='navbar-icon-cover'>
                        <path d='m 122.6 75.5 a 7 7 0 0 0 -48 0 a 7 7 0 0 0 48 -1' className="navbar-path"></path>
                    </svg>
                </ul>

            </div>
        </nav>

    )
}

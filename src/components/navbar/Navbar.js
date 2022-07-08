import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar-nav">
            <div className='navbar-container'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><a>Home</a></li>
                    <li className='navbar-li'><a>Resume</a></li>
                    <li className='navbar-li'><a>Projects</a></li>
                </ul>
                <ul className='navbar-icon-container'>
                    <li><a className='icon-anchor'><i className='linkin'/></a></li>
                    <li><a className='icon-anchor'><i className='github'/></a></li>
                    <li><a className='icon-anchor'><i className='instagram'/></a></li>
                </ul>

            </div>
        </nav>

    )
}

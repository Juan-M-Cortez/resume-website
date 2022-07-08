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
                    <li className='navbar-li'><a>Linkedin</a></li>
                    <li className='navbar-li'><a>GitHub</a></li>
                </ul>


            </div>
        </nav>

    )
}

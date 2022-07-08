import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="Navbar-nav">
            <div className='Navbar-container'>
                <a>Home</a>
                <a>Resume</a>
                <a>Projects</a>
                <a>Linkedin</a>
                <a>GitHub</a>
                <div className='Navbar-divider'/>
                

            </div>
        </nav>

    )
}

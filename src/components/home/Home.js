import React from 'react';
import './Home.css';
import profilePic from '../../pictures/tatiana-hordiienko-weylin-enright.jpg';

function Home() {
  return (
    <div className='home-container'>
    <div className='profile'>
    Profile
        <div className='img-container'>
            <img src={profilePic} alt='profile_pic' className='main_pic'/>
        </div>
    </div>
    <div className='profile-details'>
        Details
    </div>
    </div>
  )
}

export default Home
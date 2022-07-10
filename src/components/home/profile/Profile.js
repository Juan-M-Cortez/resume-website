import React from 'react';
import profilePic from '../../../pictures/Profile_pic.jpg';
import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
    Profile2
        <div className='img-container'>
            <img src={profilePic} alt='profile_pic' className='main_pic'/>
        </div>
    </div>
  )
}

export default Profile
import React from 'react';
import profilePic from '../../../pictures/Profile_pic.jpg';
import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
      
      <div className='profile-part1'>
      Profile
        <div className='img-container'>
          <img src={profilePic} alt='profile_pic' className='main_pic' />
        </div>
      </div>

    </div>
  )
}

export default Profile
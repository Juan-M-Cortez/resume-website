import profilePic from '../../../pictures/me.jpg';
import React from 'react'

function Part1() {
    return (
        <div className='profile-part1'>

<div className='test-pulse'>hello</div>

            <div className='img-container'>
                <img src={profilePic} alt='profile_pic' className='main_pic' />
                <h5>Juan Cortez</h5>
                <p>Front-end Developer</p>
                <p>Ui/UX Designer</p>
            </div>

            

        </div>
    )
}

export default Part1
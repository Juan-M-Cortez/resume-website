import BannerPic from '../../../../pictures/face-2-min.png';
import TypingAnimation from '../TypingAnimation';
import React from 'react'

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-animation-container'>
        <TypingAnimation />
      </div>
      {/*
      <div className='banner-div-span'>
        <span className='banner-span'>EXPLORE NOW</span>
      </div>
      */}
      <div className='banner-overlay'>

      </div>
      {/*<img src={BannerPic} alt='Banner-img' className='banner-img' />*/}

    </div>
  )
}

export default Banner
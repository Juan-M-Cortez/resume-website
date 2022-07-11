import BannerPic from '../../../../pictures/face-2-min.png';
import React from 'react'

function Banner() {
  return (
    <div className='banner'>
    Banner
          <img src={BannerPic} alt='Banner-img' className='banner-img'/>
        
    </div>
  )
}

export default Banner
import React from 'react'

function Card(props) {
  const { tittle, content, url, img } = props;
  return (
    <div className='card'>
      {/*---------IMG PART---------*/}
      <div className='card-img-top'>
          <img src={img ? img : url} alt='certificate-pic' className='card-img'/>
      </div>
      {/*---------INFO PART---------*/}
      <div className='card-body'>
        <h5 className='card-tittle'>{tittle}</h5>
        <div className='card-content'>{content}</div>
        <button className='card-button'>Button</button>
      </div>

    </div>
  )
}

export default Card
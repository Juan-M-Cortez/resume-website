import React from 'react'

function Card(props) {
  const {tittle, content} = props;
  return (
    <div className='card'>
        <h5 className='card-tittle'>{tittle}</h5>
        <div className='card-content'>{content}</div>
    </div>
  )
}

export default Card
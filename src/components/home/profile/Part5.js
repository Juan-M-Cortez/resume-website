import React from 'react'

function Part5() {
  let spanArr = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT knowledge'];

  function spanArrLog() {
    return spanArr.map((span,index) => {
      return (
        <div className='part5-svg-span-container' key={`part5-${index}`}>
        <svg>
          <path d="M 15.1425 9 l -5.6425 5.7835 l -2.643 -2.5055 l -1.857 1.858 l 4.5 4.364 l 7.5 -7.6425 z" />
        </svg>
        <span>{span}</span>
        </div>
      )
    })
  }
  return (
    <div className='part5'>
      <div className='part5-divider' />
      <div className='part5-h6-container'>
        <h6 className='part5-h6'>Knowledge</h6>
      </div>
      {spanArrLog()}
    </div>
  )
}

export default Part5
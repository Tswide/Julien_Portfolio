import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a 
        href="https://www.linkedin.com/in/julien-jacobs-b4970b174/"
        className='home__social-icon'
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a 
        href="https://github.com/Tswide"
        className='home__social-icon'
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  )
}

export default Social
import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a 
        href="https://www.instagram.com/julien_jcbs/?hl=fr"
        className='home__social-icon'
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
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
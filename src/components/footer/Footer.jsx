import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__conainer container">
            <h1 className="footer__title">Jacobs</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.linkedin.com/in/julien-jacobs-b4970b174/"
                    className='footer__social-icon'
                    target="_blank"
                >
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a 
                    href="https://github.com/Tswide"
                    className='footer__social-icon'
                    target="_blank"
                >
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; JulienJcbs. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
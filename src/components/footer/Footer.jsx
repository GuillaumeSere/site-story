import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/guillaume-séré" target="_blank" rel="noreferrer"><BsLinkedin  className='link'/></a>
        <p>&copy; Guillaume SERE</p>
        <a href="https://github.com/GuillaumeSere" target="_blank" rel="noreferrer"><BsGithub  className='link'/></a>
       
      </div>
    </div>
  )
}

export default Footer

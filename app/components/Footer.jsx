import React from 'react'
import { FaLinkedin, FaEnvelope, FaBolt, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bottom">
        <div className="footer">
            <h5>Volt Tech  <FaBolt style={{color: 'greenyellow'}} /></h5>
            <div className="contact-links">
                <a href="mailto:jdfban@gmail.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.github.com/ajammyfish" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:jdfban@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>

            <Link className='cpage' href='/contact'>Contact Page</Link>
        </div>
    </div>
  )
}

export default Footer
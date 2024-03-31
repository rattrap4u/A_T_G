import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {RxTwitterLogo} from 'react-icons/rx'
import {ImFacebook2} from 'react-icons/im'
import {FaGithubSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TUSHAR KUMAR PATEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target={'_blank'}><FaLinkedin /></a>
        <a href="https://github.com" target={'_blank'}><FaGithubSquare /></a>
        <a href="https://instagram.com" target={'_blank'}><GrInstagram /></a>  
        <a href="https://twitter.com" target={'_blank'}><RxTwitterLogo /></a>
        <a href="https://facebook.com" target={'_blank'}><ImFacebook2 /></a>      
      </div>

      <div className="footer__copyright">
        <small><p>&copy; Tushar All rights reserved.</p></small>
      </div>
    </footer>
  )
}

export default Footer
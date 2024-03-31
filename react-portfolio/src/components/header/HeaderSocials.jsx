import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {TfiGithub} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><SiLinkedin /></a>
        <a href="https://github.com" target="_blank"><TfiGithub /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
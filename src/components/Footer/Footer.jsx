import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <section id='footer'>
      <footer>
       <a href='#home' className='footer__logo'>TIMSHELDON</a>

       <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>

       <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100090976728206&mibextid=ZbWKwL'target='_blank' rel='noreferrer'><BsFacebook/></a>
        <a href='https://instagram.com/developer_erick?igshid=ZDdkNTZiNTM='target='_blank' rel='noreferrer'><BsInstagram/></a>
        <a href='https://twitter.com/_guy_ricky?t=Jb17ZJ7kIpFm2FyNm4OcHg&s=09'target='_blank' rel='noreferrer'><AiFillTwitterCircle/></a>
       </div>

       <div className='footer__copyright'>
        <small>&copy; TIMSHELDON. All rights reserved</small>
       </div>
      </footer>
      </section>
  )
}

export default Footer

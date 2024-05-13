import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillPhone} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#home, #about, #experience, #portfolio, #contact')
  return (
   <nav>
    <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
    <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceFill/></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
   </nav>
  )
}

export default Navbar

import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from '../../assets/timm.png'
const Header = () => {
  return (
    <header id='home'>
       <div className='container header__container'>
         <h5>Hello I'm</h5>
         <h1>TIMSHELDON OURE</h1>
         <h4 className='text-light'>Fullstack Developer</h4>
         <Cta/>
          <div className='me'>
            <img src={ME} alt='me'/>
          </div>
       </div>
    </header>

  )
}

export default Header
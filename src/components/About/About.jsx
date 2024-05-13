import React from 'react'
import './about.css'
import ME from '../../assets/timm.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Myself'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>50+</small>
            </article>
          </div>

          <p>Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for agencies, consulted for startups and
               collaborated with talanted people to create digital products
              for both business and consumer use. I offer from a wide range of services,
               including brand design, programming and content creation.
             
            
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About
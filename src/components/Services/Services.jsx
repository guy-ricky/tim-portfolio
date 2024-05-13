import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Prototyping, wireframing, user flows, mockups.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Visual design and design software.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>User research and usability testing.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Information architecture </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Web-Application development.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Website maintenance and support.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Content management system (CMS) development.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>E-commerce development.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation </h3>
          </div>
          <ul className='service__list'>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Copy writing.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Social media content creation.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Podcast production.</p>
            </li>
            <li><BsCheckLg className='service__list-icon'/>
            <p>Infographic design.</p>
            </li>
          </ul>
        </article>
      </div>
      </section>
  )
}

export default Services
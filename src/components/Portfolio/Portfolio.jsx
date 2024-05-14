import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
               <article className='portfolio__item'>
           <div className='portfolio__item-image'>
           <img src={IMG2} alt=' image2'/>
           </div>
           <h3>3D-CARD</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/snowflakericky/CART-CARD.git' className='btn'target='_blank' rel='noreferrer'>Github</a>
           <a href='https://cart-card-effect.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
           </div>
        </article>

        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
           <img src={IMG3} alt=' image1'/>
           </div>
           <h3>CARD GLOW EFFECT</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/snowflakericky/GLOW-EFFECT.git' className='btn'target='_blank' rel='noreferrer'>Github</a>
           <a href='https://card-glow.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
           </div>
        </article>

        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
           <img src={IMG4} alt=' image1'/>
           </div>
           <h3>PARALLAX EFFECT</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/snowflakericky/PARALLAX-EFFECT.git' className='btn'target='_blank' rel='noreferrer'>Github</a>
           <a href='https://mountainparallax-effect.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
           </div>
        </article>

        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
           <img src={IMG5} alt=' image1'/>
           </div>
           <h3>LOGIN-FORM</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/snowflakericky/LOGIN-FORM.git' className='btn'target='_blank' rel='noreferrer'>Github</a>
           <a href='https://glowinglogin-form.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
           </div>
        </article>

        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
           <img src={IMG6} alt=' image1'/>
           </div>
           <h3>MAGIC-CARD</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/snowflakericky/MAGIC-CARD.git' className='btn'target='_blank' rel='noreferrer'>Github</a>
           <a href='https://glowcard.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
           </div>
        </article>
      </div>
      </section>
  )
}

export default Portfolio
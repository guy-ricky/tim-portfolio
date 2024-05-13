import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar1.JPG'
import AVT2 from '../../assets/avatar2.JPG'
import AVT3 from '../../assets/avatar3.JPG'
import AVT4 from '../../assets/avatar4.JPG'
import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
       modules={[Navigation, Pagination,]}
       spaceBetween={40}
       slidesPerView={1}
       navigation={{clickable: true}}
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
       <SwiperSlide className='testimonial'>
           <div className='client__avatar'>
            <img src={AVT1} alt='client'/>            
           </div>
           <h5 className='client__name'>Mark</h5>
            <small className='client__review'> Working with Tim was a pleasure! He had a keen eye for design and really understood my target audience. 
            He was able to create a user-friendly interface that exceeded my expectations.</small>
       </SwiperSlide>
       <SwiperSlide className='testimonial'>
           <div className='client__avatar'>
            <img src={AVT2} alt='client'/>
            
           </div>
           <h5 className='client__name'>Tecla</h5>
            <small className='client__review'> I am blown away by the design skills of Tim. He really took the time to understand our brand and the 
            user experience we wanted to create. The end result is a beautiful, functional website that we are proud to show off.</small>
       </SwiperSlide>
       <SwiperSlide className='testimonial'>
           <div className='client__avatar'>
            <img src={AVT3} alt='client'/>
            
           </div>
           <h5 className='client__name'>Currie</h5>
            <small className='client__review'> We were impressed with Tim from the beginning. He was professional, attentive to our needs,
             and able to create a seamless user experience that has increased our website engagement. Highly recommend!</small>
       </SwiperSlide>
       <SwiperSlide className='testimonial'>
           <div className='client__avatar'>
            <img src={AVT4} alt='client'/>
            
           </div>
           <h5 className='client__name'>Katrina</h5>
            <small className='client__review'> I was thoroughly impressed with Tim's work on our website redesign. He was able to create a fresh and modern 
            look while still keeping our brand identity intact. The end result was a beautiful and user-friendly website.</small>
       </SwiperSlide>
      </Swiper>
      </section>
  )
}

export default Testimonial
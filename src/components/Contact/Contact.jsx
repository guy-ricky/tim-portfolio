import React, {  useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Result =() =>{
  return(
    <p>Your message has been sent successfully. I will get back to you soon</p>
  )
}

const Contact = () => {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gz7gmcf', 'template_hk4j6kd', form.current, 'lPT73z-nR7XqWBWDv')
      .then((result) => {
          console.log(result.text)
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  setTimeout(() =>{
    showResult(false)
  }, 5000)
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>timsheldonoure</h5>
          <a href='mailto:timsheldonoure1@gmail.com' target='_blank' rel='noreferrer'>Send A Message</a>
        </article>

        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>timsheldon</h5>
          <a href='https://m.me/erickmwangi' target='_blank' rel='noreferrer'
          >Send A Message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>timsheldon</h5>
          <a href='https://api.whatsapp.com/send?phone=254791058879' target='_blank' rel='noreferrer'>Send A Message</a>
        </article>
      </div>
      <form ref={form} className='form-contact' onSubmit={sendEmail}>
      <input id='fname' type='text' name='user_name' placeholder='Your Full Name' />
      <input id='email' type='email' name='user_email' placeholder='Your Email' />
      <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
      <button id='submit' type='submit' className='btn btn-primary' value="Send Message"> Send Message</button>
      <div>{result ? <Result/> : null}</div>
      </form>
      
    </div>
    </section>
  )
}

export default Contact
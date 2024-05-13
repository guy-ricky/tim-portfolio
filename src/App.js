import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Navbar/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
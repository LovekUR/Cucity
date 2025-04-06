import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container-2"> 
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Students Says' />
        <Testimonial/>
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
       
      

    </div>
    
  )
}

export default App

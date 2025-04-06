import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>Transforming Education for a Brighter Future</h1>
      <p>
        Chandigarh University's cutting-edge curriculum is meticulously designed to empower students with the knowledge, skills, and real-world experiences essential to thrive in today's dynamic educational landscape. The university emphasizes a blend of domain depth, ensuring that students gain a profound understanding of their subjects while engaging in practical applications.
      </p>

        <button className='btn'> Explore Programs <img src={dark_arrow} alt=""></img></button>
</div>
    </div>
  );
};

export default Hero;

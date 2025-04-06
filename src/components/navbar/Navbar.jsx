import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './navbar.css'
import logo from '../../assets/edusity_assets/logo1.png';
import menu_icon from '../../assets/edusity_assets/menu-icon.png';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =() =>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="Logo"  className='logo'/>

      <ul className={mobileMenu? '': 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-230} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  );
};

export default Navbar;

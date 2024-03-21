// Importing necessary React hooks and components
import React, { useState } from 'react';
import './navbar.css'; // Importing custom CSS for styling the navbar
import logo from '../../assets/logo.png'; // Importing the website logo
import contactImg from '../../assets/contact.png'; // Importing the contact section image
import { Link } from 'react-scroll'; // Importing Link component for smooth scroll functionality
import menu from '../../assets/menu.png'; // Importing menu icon for mobile view

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage mobile menu visibility

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navBox">
        <img src={logo} alt="Logo" className="logo"/> 
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Works</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
          <img src={contactImg} alt="Contact Me" className='desktopMenuImg' />Contact Me
        </button>
        <img src={menu} alt="Menu" className="mobMenu" onClick={toggleMenu}/>
        <div className={`navMenu ${showMenu ? 'show' : ''}`}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Works</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Education</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Exporting the Navbar component

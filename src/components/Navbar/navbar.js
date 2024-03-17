import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navBox">
        <img src={logo} alt="Logo" className = "logo"/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Works</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contactImg} alt="" className='desktopMenuImg' />Contact Me</button>
        
        <img src={menu} alt="Menu" className = "mobMenu" onClick={toggleMenu}/>
        <div className={`navMenu ${showMenu ? 'show' : ''}`}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Works</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick = {() => setShowMenu(false)}>Education</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
import React from 'react';
import './footer.css';

const Footer = () => {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
        {/* Render the dynamic year in the copyright message */}
        Copyright &copy; {year} Lam Zhi Qiang. All Rights Reserved
    </footer>
  );
}

export default Footer;

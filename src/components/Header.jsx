// src/components/Header.jsx
import React, { useState } from 'react'; // 💡 Import useState
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import LogoImage from '../assets/NAOGSP_Logo.webp';

function Header() {
  const location = useLocation();
  // 💡 State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to close menu on link click (improves UX)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const isHomePage = location.pathname === '/';

  return (
    <header className={`main-header ${!isHomePage ? 'is-not-home' : ''}`}>
      
     <div className="logo">
        <Link to="/">
          <img src={LogoImage} alt="NAOGSP Logo" className="header-logo-image" />
        </Link>
      </div>
      
      {/* 💡 HAMBURGER BUTTON */}
      <button 
        className="menu-toggle" 
        onClick={handleMenuToggle}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        {isMenuOpen ? '✕' : '☰'} {/* Icon Change */}
      </button>

      {/* 💡 Apply conditional class 'is-open' */}
      <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`} id="main-navigation">
        <ul>
          <li><Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/what-we-do" onClick={handleLinkClick} className={location.pathname === '/what-we-do' ? 'active' : ''}>What We Do</Link></li>
          <li><Link to="/partnerships" onClick={handleLinkClick} className={location.pathname === '/partnerships' ? 'active' : ''}>Partnerships</Link></li>
          <li><Link to="/membership" onClick={handleLinkClick} className={location.pathname === '/membership' ? 'active' : ''}>Membership</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick} className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          <li><Link to="/news-media" onClick={handleLinkClick} className={location.pathname === '/news-media' ? 'active' : ''}>News & Media</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
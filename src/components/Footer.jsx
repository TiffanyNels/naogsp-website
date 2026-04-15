// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/what-we-do', label: 'What We Do' },
    { to: '/partnerships', label: 'Partnerships' },
    { to: '/membership', label: 'Membership' },
    { to: '/contact', label: 'Contact' },
  ];

  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      text: 'info@naogsp.com',
      href: 'mailto:info@naogsp.com' 
    },
    { 
      icon: <FaPhone />, 
      text: '+264 (0)85 770 7090', 
      href: 'tel:+264857707090' 
    },
  ];

  return (
    <footer className="main-footer">
      <div className="footer-content-main">
        
        <div className="footer-section footer-inquiry">
          <h3>For Enquiries</h3>
          <ul className="inquiry-list">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <span className="icon-wrapper">{item.icon}</span>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section footer-nav-links">
          <h3>Quick Links</h3>
          <ul className="nav-links-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-copyright">
        &copy; {currentYear} NAOGSP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
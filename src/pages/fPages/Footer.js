import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './fStyle/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 DreamLandia Theme Park. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/TOS">Terms of Service</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/AdminL">Admin Login</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

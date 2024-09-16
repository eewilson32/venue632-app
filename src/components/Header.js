import React from 'react';
import '../styles.css';

function Header() {
  const baseUrl = process.env.REACT_APP_BASE_URL || '';

  return (
    <header>
      <nav>
        <ul>
          <li><a href={`${baseUrl}`}>Home</a></li>
          <li><a href="#">FAQ & Support</a></li>
          <li><a href="#">Account Sign-Up/Login</a></li>
          <li><a href="#">Venue Policies</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Directions</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

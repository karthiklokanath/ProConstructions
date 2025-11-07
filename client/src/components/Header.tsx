import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">AVADA</span>
          <span className="logo-subtext">ARCHITECTS</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#work">OUR WORK</a></li>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

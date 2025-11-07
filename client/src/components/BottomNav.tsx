import React, { useEffect, useState } from 'react';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // When scrolled to the very top, make the bottom nav stick to the top
      const isAtTop = window.scrollY <= 0;
      setStuck(isAtTop);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`bottom-nav ${stuck ? 'stuck' : ''}`} aria-hidden={false}>
      <div className="bottom-nav-container">
        <div className="bn-logo">
          <span className="bn-logo-text">AVADA</span>
          <span className="bn-logo-sub">&nbsp;&amp;&nbsp;AVADA</span>
        </div>
        <nav className="bn-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;

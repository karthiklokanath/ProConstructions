import React, { useEffect, useRef, useState } from 'react';
import './FlowNav.css';

const FlowNav: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner) return;

    let ticking = false;

    const check = () => {
      const top = inner.getBoundingClientRect().top;
      const shouldHold = top <= 0;
      if (shouldHold !== held) {
        setHeld(shouldHold);
        if (shouldHold) {
          // set placeholder height to avoid layout jump
          root.style.height = `${inner.offsetHeight}px`;
        } else {
          root.style.height = '';
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          check();
          ticking = false;
        });
      }
    };

    // initial
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      root.style.height = '';
    };
  }, [held]);

  return (
    <nav className="flow-nav" ref={rootRef} aria-hidden={false}>
      <div className={`flow-nav-inner ${held ? 'held' : ''}`} ref={innerRef}>
        <div className="flow-nav-container">
          <div className="fn-logo">
            <span className="fn-logo-text">AVADA</span>
            <span className="fn-logo-sub">ARCHITECTS</span>
          </div>
          <ul className="fn-list">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#work">OUR WORK</a></li>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FlowNav;

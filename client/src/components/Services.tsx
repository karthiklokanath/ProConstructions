import React, { useEffect, useRef } from 'react';
import './Services.css';

import arch3 from '../assets/Arch1 copy 2.png';
import arch4 from '../assets/Arch1 copy 3.png';
import arch5 from '../assets/Arch1 copy 4.png';
import arch2 from '../assets/Arch1 copy.png';
import arch1 from '../assets/Arch1.png';

const Services: React.FC = () => {
  const services = [
    { title: 'ARCHITECTURE', image: arch1 },
    { title: 'INTERIOR DESIGN', image: arch2 },
    { title: 'LANDSCAPE', image: arch3 },
    { title: 'ENGINEERING', image: arch4 },
    { title: 'PROJECT MANAGEMENT', image: arch5 }
  ];

  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      containerRefs.current.forEach((container, index) => {
        const inner = innerRefs.current[index];
        if (!container || !inner) return;

        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight;

        const denom = rect.height + vh;
        const raw = (vh - rect.top) / denom;
        const progress = Math.max(0, Math.min(1, raw));

        const innerWidth = inner.scrollWidth;
        const containerWidth = container.clientWidth;
        const maxTranslate = Math.max(0, innerWidth - containerWidth);
        const direction = index % 2 === 0 ? -1 : 1; // Alternate direction
        const tx = direction * progress * maxTranslate;
        inner.style.transform = `translateX(${tx}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      innerRefs.current.forEach(inner => {
        if (inner) inner.style.transform = '';
      });
    };
  }, []);

  return (
    <section className="services">
      <div className="services-stack">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-strip ${index % 2 === 0 ? 'arch' : ''}`}
            aria-label={service.title}
            ref={el => {
              containerRefs.current[index] = el;
            }}
          >
            <div
              className="arch-inner"
              ref={el => {
                innerRefs.current[index] = el;
              }}
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="service-overlay" />
            <div className="service-strip-inner">
              <span className="service-strip-title">{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

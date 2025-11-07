import React from 'react';
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

  return (
    <section className="services">
      <div className="services-stack">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-strip"
            style={{ backgroundImage: `url(${service.image})` }}
            aria-label={service.title}
          >
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

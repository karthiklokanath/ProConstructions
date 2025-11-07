import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.facebook.com/ThemeFusion-101565403356430/" target="_blank" rel="noopener noreferrer">
              <i className="social-icon">f</i>
            </a>
            <a href="https://twitter.com/theme_fusion" target="_blank" rel="noopener noreferrer">
              <i className="social-icon">t</i>
            </a>
            <a href="https://www.instagram.com/themefusion/" target="_blank" rel="noopener noreferrer">
              <i className="social-icon">i</i>
            </a>
            <a href="https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w" target="_blank" rel="noopener noreferrer">
              <i className="social-icon">y</i>
            </a>
          </div>
          
          <div className="footer-cta">
            <a href="#contact" className="cta-button">GET IN TOUCH</a>
          </div>
          
          <div className="footer-info">
            <p className="footer-phone">1.800.555.6789</p>
            <a href="mailto:support@your-domain.com" className="footer-email">EMAIL US</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2012 - 2025 • <a href="https://avada.com/" target="_blank" rel="noopener noreferrer">Avada</a> is a{' '}
            <a href="https://avada.com/features/" target="_blank" rel="noopener noreferrer">Website Builder</a> for{' '}
            <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> and{' '}
            <a href="https://avada.com/feature/woocommerce/" target="_blank" rel="noopener noreferrer">eCommerce</a> • 
            All Rights Reserved • Developed by{' '}
            <a href="https://1.envato.market/V5WDA" target="_blank" rel="noopener noreferrer">ThemeFusion</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

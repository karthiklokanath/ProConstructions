import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand-text">Pro Constructions</div>
                        <p className="footer-desc">
                            Building excellence for over 8 years. Transforming visions into reality with precision and passion.
                        </p>
                    </div>

                    <div>
                        <div className="footer-col-title">Quick Links</div>
                        <Link to="/" className="footer-link" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        <Link to="/about" className="footer-link" onClick={() => window.scrollTo(0, 0)}>About</Link>
                        <Link to="/services" className="footer-link" onClick={() => window.scrollTo(0, 0)}>Services</Link>
                        <Link to="/contact" className="footer-link" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                    </div>

                    <div>
                        <div className="footer-col-title">Services</div>
                        <span className="footer-link">Architecture</span>
                        <span className="footer-link">Interior Design</span>
                        <span className="footer-link">Renovation</span>
                        <span className="footer-link">Engineering</span>
                    </div>

                    <div>
                        <div className="footer-col-title">Follow Us</div>
                        <div className="footer-social">
                            <a
                                href="https://instagram.com/proconstructionss"
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>&copy; {new Date().getFullYear()} Pro Constructions. All Rights Reserved.</span>
                    <span>Crafted with precision</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

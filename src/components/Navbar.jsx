import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'dark';
        } catch {
            return 'dark';
        }
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        try {
            if (theme === 'light') {
                document.documentElement.classList.add('light');
            } else {
                document.documentElement.classList.remove('light');
            }
            localStorage.setItem('theme', theme);
        } catch {
            // ignore
        }
    }, [theme]);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
            <Link to="/" className="nav-brand" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="Pro Constructions Logo" className="nav-brand-logo" />
                <span className="nav-brand-text">Pro Constructions</span>
            </Link>

            <div className="nav-links">
                {navLinks.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`nav-link${location.pathname === to ? ' active' : ''}`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        {label}
                    </Link>
                ))}
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>

            <button
                className={`mobile-menu-btn${mobileMenuOpen ? ' open' : ''}`}
                onClick={() => setMobileMenuOpen(prev => !prev)}
                aria-label="Toggle mobile menu"
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`nav-link${location.pathname === to ? ' active' : ''}`}
                        onClick={handleLinkClick}
                    >
                        {label}
                    </Link>
                ))}
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

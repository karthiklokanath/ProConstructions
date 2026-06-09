import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logo.PNG';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light';
        } catch (e) {
            return 'light';
        }
    });
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Apply theme class and persist preference
    useEffect(() => {
        try {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        } catch (e) {
            // ignore (e.g., SSR or privacy settings)
        }
    }, [theme]);

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        height: '90px',
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        color: 'var(--color-text-primary)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background-color 0.4s ease, height 0.4s ease',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none'
    };

    const logoStyle = {
        fontSize: '22px',
        fontWeight: '700',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: isScrolled ? 'var(--color-text-primary)' : 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    };

    const linkContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    };

    const linkStyle = {
        marginLeft: '35px',
        fontSize: '13px',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: isScrolled ? 'var(--color-text-primary)' : 'rgba(255,255,255,0.92)',
        position: 'relative',
        transition: 'color 0.3s'
    };

    // Helper to add hover effect logic if needed, or stick to simple CSS hover in a real app
    // For inline styles, we might miss the ::after pseudo-element hover effects common in Avada
    // We'll trust the global CSS a:hover or add a class if we were using a CSS file for this component.

    return (
        <nav style={navStyle}>
            <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
                <Link to="/" style={logoStyle} onClick={() => window.scrollTo(0, 0)}>PRO CONSTRUCTIONS</Link>
            </div>
            <div style={linkContainerStyle}>
                <Link to="/" style={linkStyle} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                {/* <Link to="/get-quote" style={linkStyle}>Get Quote</Link> */}
                <Link to="/contact" style={linkStyle}>Contact</Link>
                <button
                    onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
                    aria-label="Toggle theme"
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    style={{
                        marginLeft: '20px',
                        padding: '8px 10px',
                        background: 'transparent',
                        border: isScrolled ? '1px solid var(--color-border)' : '1px solid rgba(255,255,255,0.6)',
                        color: isScrolled ? 'var(--color-text-primary)' : 'rgba(255,255,255,0.92)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

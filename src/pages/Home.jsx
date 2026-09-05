import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import logo from '../Images/logo.png';

const Home = () => {
    const navigate = useNavigate();



    const projects = [
        {
            title: "Danish Modernity",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "West Shinjuku",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "London Palace",
            category: "Restoration",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "New York Loft",
            category: "Interior",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-bg"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                ></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-logo-wrapper">
                        <img src={logo} alt="Pro Constructions Logo" className="hero-logo" />
                    </div>
                    <h1 className="hero-title">Pro Constructions</h1>
                </div>
            </section>

            {/* Feature Section */}
            <section className="feature-section">
                <div className="container">
                    <div className="feature-grid">
                        <div className="feature-col feature-col-left">
                            <h2 className="feature-title">BUILD WITH PRO's</h2>
                            <div className="feature-divider"></div>

                            <p style={{ fontWeight: 600, fontSize: '20px', color: 'var(--color-text-primary)', marginBottom: '16px' }}>
                                Welcome to Pro Construction – <span style={{ fontSize: '19px', fontStyle: 'italic' }}>Where vision meets precision.</span>
                            </p>

                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                At Pro Construction, we don't just build structures—we craft legacies. With years of expertise, cutting-edge innovation, and unwavering dedication, we transform blueprints into landmarks that stand the test of time. From sleek commercial spaces to dream homes, our team delivers quality, safety, and Pro-level craftsmanship in every project.
                            </p>
                        </div>

                        <div className="feature-col feature-col-image">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Construction site"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'; }}
                            />
                        </div>

                        <div className="feature-col feature-col-right">
                            <div className="feature-right-inner">
                                <p style={{ fontWeight: 600, fontSize: '20px', color: 'var(--color-text-primary)', marginBottom: '10px' }}>Why choose us?</p>

                                <ul style={{ margin: '8px 0 18px 0', listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '12px', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <Check size={18} strokeWidth={2.5} style={{ color: 'var(--color-accent)', marginTop: '4px', flexShrink: 0 }} />
                                        <span><strong>Pro Expertise:</strong> Licensed professionals committed to excellence.</span>
                                    </li>
                                    <li style={{ marginBottom: '12px', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <Check size={18} strokeWidth={2.5} style={{ color: 'var(--color-accent)', marginTop: '4px', flexShrink: 0 }} />
                                        <span><strong>End-to-End Solutions:</strong> Design, build, renovate—seamlessly.</span>
                                    </li>
                                </ul>

                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                    Whether breaking ground on a new development or renovating existing spaces, we prioritize your vision, timeline, and budget. Our reputation is built on trust, transparency, and results that speak louder than words.
                                </p>

                                <h3 style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '8px' }}>Build smarter. Build bolder. Build with Pro.</h3>
                                <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', marginTop: '10px' }}>Ready to start your project? Let's lay the foundation for success—together.<br /><strong style={{ color: 'var(--color-text-primary)' }}>Pro Construction: Solid Futures, Built Today.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Section */}
            <section>
                <div className="category-card">
                    <div
                        className="category-image parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                    ></div>
                    <div className="category-overlay"></div>
                    <h3>Architecture And Construction</h3>
                </div>

                <div className="category-card">
                    <div
                        className="category-image parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                    ></div>
                    <div className="category-overlay"></div>
                    <h3>Interior Design</h3>
                </div>

                <div className="category-card">
                    <div
                        className="category-image parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                    ></div>
                    <div className="category-overlay"></div>
                    <h3>Renovation & Remodeling</h3>
                </div>
            </section>



            {/* Recent Projects Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Work</span>
                        <h2 className="section-title">Recent Projects</h2>
                        <div className="section-divider"></div>
                    </div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div
                                className="project-image"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to start your project?</h2>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/contact')}
                    >
                        Get in Touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;

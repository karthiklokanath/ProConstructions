const About = () => {
    return (
        <div>
            <section className="page-hero">
                <div
                    className="hero-bg"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <span className="page-hero-badge animate-fade-in">Our Story</span>
                    <h1 className="page-hero-title animate-fade-in-up">About Pro Constructions</h1>
                    <p className="page-hero-subtitle animate-fade-in-up delay-1">
                        Building excellence for over 8 years
                    </p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <p className="about-intro animate-fade-in-up">
                        For over <strong>8 years</strong>, Pro Constructions has been the cornerstone of innovation, reliability, and excellence in the construction industry. Since our inception, we've transformed visions into reality, delivering <strong>50+ landmark projects</strong> across residential, commercial, renovation, and institutional sectors. We've built a legacy defined by precision and passion.
                    </p>

                    <div className="about-card animate-fade-in-up">
                        <h2>Our Journey</h2>
                        <p>
                            Founded on the principles of integrity and craftsmanship, we've grown into a trusted name by prioritizing quality, safety, and client collaboration. Our portfolio spans:
                        </p>
                        <ul className="about-icon-list">
                            <li>
                                <span className="icon">🏠</span>
                                <div>
                                    <strong>Residential:</strong> Custom-built homes tailored to modern lifestyles.
                                </div>
                            </li>
                            <li>
                                <span className="icon">🏢</span>
                                <div>
                                    <strong>Commercial:</strong> Dynamic workspaces designed to inspire productivity.
                                </div>
                            </li>
                            <li>
                                <span className="icon">🔨</span>
                                <div>
                                    <strong>Renovation:</strong> Breathing new life into existing structures.
                                </div>
                            </li>
                            <li>
                                <span className="icon">🏫</span>
                                <div>
                                    <strong>Institutional:</strong> Building future-ready schools and community hubs.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="section-header animate-fade-in-up">
                        <h2 className="section-title">Why Partner With Us?</h2>
                    </div>

                    <div className="partner-grid">
                        <div className="partner-card animate-fade-in-up">
                            <h3>Proven Expertise</h3>
                            <p>8 years of industry-leading innovation.</p>
                        </div>
                        <div className="partner-card animate-fade-in-up delay-1">
                            <h3>Diverse Portfolio</h3>
                            <p>Mastery across all construction sectors.</p>
                        </div>
                        <div className="partner-card animate-fade-in-up delay-2">
                            <h3>Client-Centric Approach</h3>
                            <p>Your vision drives every blueprint.</p>
                        </div>
                    </div>

                    <div className="about-closing animate-fade-in-up">
                        <p>
                            At Pro Constructions, we don't just erect buildings—we create spaces where lives thrive, businesses flourish, and communities connect. With a team of seasoned professionals and a relentless commitment to excellence, we're here to build your tomorrow, today.
                        </p>
                        <h3>Build with Confidence. Build with Pro.</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

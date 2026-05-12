import React from 'react';

const Home = () => {
    // --- Styles ---
    const heroStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        // Credits: Unsplash (Modern Architecture)
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        paddingTop: '90px' // Offset for fixed navbar
    };

    const subHeadingStyle = {
        fontSize: '12px',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        marginBottom: '25px',
        color: '#ffffff', // As seen in screenshot, usually white or very light grey
        fontWeight: '500'
    };

    const headingStyle = {
        fontSize: '70px', // Larger hero text
        fontWeight: '700',
        marginBottom: '20px',
        lineHeight: '1.1',
        letterSpacing: '-2px'
    };

    const sectionStyle = {
        padding: '120px 0',
        backgroundColor: '#1e1e1e', // Dark background
        color: '#999'
    };

    const introSectionStyle = {
        ...sectionStyle,
        backgroundColor: '#252525' // Slightly lighter for contrast
    };

    const containerStyle = {
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center'
    };

    const sectionTitleStyle = {
        color: '#ffffff',
        fontSize: '40px',
        fontWeight: '400',
        marginBottom: '30px',
        letterSpacing: '-1px'
    };

    const dividerStyle = {
        width: '60px',
        height: '2px',
        backgroundColor: '#333',
        margin: '0 auto 40px auto'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '0', // No gap for that tight, masonry-like feel often seen or small standard gap
    };

    // Project Card Component (internal for now)
    const ProjectCard = ({ image, title, category }) => (
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden', cursor: 'pointer', group: 'project-card' }} className="project-card">
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease'
            }} className="project-image"></div>

            {/* Overlay on hover logic would typically be CSS classes, here simulating structure */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                opacity: 0, // Hidden by default, hover effects would show this
                transition: 'opacity 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
            }} className="project-overlay">
                <h3 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '10px' }}>{title}</h3>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>{category}</span>
            </div>
        </div>
    );

    // Category Link Component
    const CategoryLink = ({ title, image, parallax = false }) => (
        <div style={{
            position: 'relative',
            height: '400px',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '10%',
            cursor: 'pointer'
        }} className="category-card">
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                // If parallax is true, use fixed attachment for scrolling effect
                // Note: sticky/fixed backgrounds on some mobile browsers can be quirky, but this is the standard CSS way
                backgroundAttachment: parallax ? 'fixed' : 'scroll',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease',
                zIndex: 1
            }} className="category-image pan-bg"></div>

            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(30, 30, 30, 0.65)', // Dark overlay as seen in screenshot
                zIndex: 2,
                transition: 'background-color 0.3s'
            }} className="category-overlay"></div>

            <h3 style={{
                position: 'relative',
                zIndex: 3,
                fontSize: '30px',
                fontWeight: '500',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color: 'white'
            }}>{title}</h3>
        </div>
    );

    // Horizontal Scroll Section Component
    const HorizontalScrollSection = () => {
        const containerRef = React.useRef(null);
        const trackRef = React.useRef(null);

        React.useEffect(() => {
            const handleScroll = () => {
                const container = containerRef.current;
                const track = trackRef.current;
                if (!container || !track) return;

                const containerTop = container.offsetTop;
                const containerHeight = container.offsetHeight;
                const viewportHeight = window.innerHeight;

                // Calculate how much we've scrolled into the container
                // We want to map the scroll distance to the horizontal translation
                const scrollDist = window.scrollY - containerTop;

                // Total scrollable functionality starts when container hits top (roughly)
                // but simpler logic: percentage of scroll through the container
                let percentage = scrollDist / (containerHeight - viewportHeight);

                // Clamp percentage between 0 and 1
                percentage = Math.max(0, Math.min(1, percentage));

                // Max translation is (Track Width - Viewport Width)
                // Track width is 400vw (4 items * 100vw). Viewport is 100vw.
                // So max translation is -300vw.
                const maxTranslate = 300; // in vw units
                const translateX = -percentage * maxTranslate;

                track.style.transform = `translateX(${translateX}vw)`;
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const categories = [
            {
                title: "Architecture",
                image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            },
            {
                title: "Interior Design",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            },
            {
                title: "Landscape",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            },
            {
                title: "Engineering",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            }
        ];

        return (
            <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div ref={trackRef} style={{
                        display: 'flex',
                        height: '100%',
                        width: '400vw', // 4 items * 100vw
                        willChange: 'transform' // optimizations
                    }}>
                        {categories.map((cat, index) => (
                            <div key={index} style={{
                                width: '100vw',
                                height: '100vh',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundImage: `url(${cat.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: 'rgba(30, 30, 30, 0.5)',
                                    zIndex: 2
                                }}></div>
                                <h3 style={{
                                    position: 'relative',
                                    zIndex: 3,
                                    fontSize: '60px',
                                    fontWeight: '700',
                                    letterSpacing: '8px',
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                }}>{cat.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={heroStyle}>
                <h5 style={headingStyle}>PRO CONSTRUCTIONS</h5>
            </section>

            {/* Intro section removed — content moved into the feature columns */}

            {/* Feature three-column section updated to BUILD WITH PRO content */}
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
                                At Pro Construction, we don’t just build structures—we craft legacies. With years of expertise, cutting-edge innovation, and unwavering dedication, we transform blueprints into landmarks that stand the test of time. From sleek commercial spaces to dream homes, our team delivers quality, safety, and Pro-level craftsmanship in every project.
                            </p>

                            
                        </div>

                        <div className="feature-col feature-col-image">
                            <img
                                src="/dist/assets/mainContent.jpg"
                                alt="Construction site"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1505842465776-3d0f2b2afc9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'; }}
                            />
                        </div>

                        <div className="feature-col feature-col-right">
                            <div className="feature-right-inner">
                                <p style={{ fontWeight: 600, fontSize: '20px', color: 'var(--color-text-primary)', marginBottom: '10px' }}>Why choose us?</p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 18px 0' }}>
                                    <li style={{ marginBottom: '10px', color: 'var(--color-text-primary)' }}>✅ <strong>Pro Expertise:</strong> Licensed professionals committed to excellence.</li>
                                    <li style={{ marginBottom: '10px', color: 'var(--color-text-primary)' }}>✅ <strong>End-to-End Solutions:</strong> Design, build, renovate—seamlessly.</li>
                                </ul>

                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                    Whether breaking ground on a new development or renovating existing spaces, we prioritize your vision, timeline, and budget. Our reputation is built on trust, transparency, and results that speak louder than words.
                                </p>

                                <h3 style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '20px', marginTop: '8px' }}>Build smarter. Build bolder. Build with Pro.</h3>
                                <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', marginTop: '10px' }}>Ready to start your project? Let’s lay the foundation for success—together.<br /><strong style={{ color: 'var(--color-text-primary)' }}>Pro Construction: Solid Futures, Built Today.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Section (Architecture / Interior Design) */}
            <section>
                <div style={{ width: '100%' }}>
                    <CategoryLink
                        title="Architecture And Construction"
                        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        parallax={true}
                    />
                </div>
                <div style={{ width: '100%' }}>
                    <CategoryLink
                        title="Interior Design"
                        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        parallax={true}
                    />
                </div>
            </section>

            

            {/* Recent Projects Preview */}
            <section style={{ ...sectionStyle, padding: '0' }}> {/* Full width grid often has no container padding */}

                {/* Header for projects often inside a container above the grid, or part of the grid */}
                <div style={{ ...containerStyle, padding: '100px 20px' }}>
                    <div style={{ ...subHeadingStyle, color: '#999' }}>Our Work</div>
                    <h2 style={sectionTitleStyle}>Recent Projects</h2>
                    <div style={dividerStyle}></div>
                </div>

                <div style={gridStyle}>
                    <ProjectCard
                        title="Danish Modernity"
                        category="Residential"
                        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    />
                    <ProjectCard
                        title="West Shinjuku"
                        category="Commercial"
                        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    />
                    <ProjectCard
                        title="London Palace"
                        category="Restoration"
                        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                    />
                    <ProjectCard
                        title="New York Loft"
                        category="Interior"
                        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                    />
                </div>
            </section>

            {/* Footer placeholder call-to-action */}
            <section style={{ padding: '100px 0', backgroundColor: '#e9e9e9', color: '#333', textAlign: 'center' }}>
                <div style={containerStyle}>
                    <h2 style={{ ...sectionTitleStyle, color: '#333' }}>Ready to start your project?</h2>
                    <button style={{
                        padding: '15px 40px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>Get in Touch</button>
                </div>
            </section>
        </div>
    );
};

export default Home;

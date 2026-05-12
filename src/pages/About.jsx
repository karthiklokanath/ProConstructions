const About = () => {
    const pageStyle = {
        minHeight: '100vh',
        backgroundColor: '#1e1e1e',
        color: '#999',
        paddingTop: '90px' // Offset for navbar
    };

    const heroStyle = {
        height: '60vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px'
    };

    const containerStyle = {
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '80px 40px'
    };

    const headingStyle = {
        fontSize: '48px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '20px',
        letterSpacing: '-1px'
    };

    const subHeadingStyle = {
        fontSize: '12px',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        color: '#ffffff',
        fontWeight: '500'
    };

    const sectionTitleStyle = {
        color: '#ffffff',
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '30px',
        letterSpacing: '-1px',
        textAlign: 'center'
    };

    const cardStyle = {
        backgroundColor: '#252525',
        padding: '40px',
        marginBottom: '40px',
        borderLeft: '4px solid #f39c12',
        lineHeight: '1.8'
    };

    const iconListStyle = {
        listStyle: 'none',
        padding: 0,
        marginTop: '20px'
    };

    const iconListItemStyle = {
        marginBottom: '15px',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'flex-start'
    };

    return (
        <div style={pageStyle}>
            {/* Hero Section */}
            <section style={heroStyle}>
                <div style={subHeadingStyle}>Our Story</div>
                <h1 style={headingStyle}>About Pro Constructions</h1>
                <p style={{ color: 'white', fontSize: '20px', maxWidth: '700px', opacity: '0.9' }}>
                    Building excellence for over 8 years
                </p>
            </section>

            {/* Main Content */}
            <section style={containerStyle}>
                {/* Introduction */}
                <div style={{ textAlign: 'justify', marginBottom: '60px', fontSize: '18px', lineHeight: '1.9' }}>
                    <p style={{ fontSize: '20px', color: '#ccc', marginBottom: '25px' }}>
                        For over <strong style={{ color: 'white' }}>8 years</strong>, Pro Constructions has been the cornerstone of innovation, reliability, and excellence in the construction industry. Since our inception, we've transformed visions into reality, delivering <strong style={{ color: 'white' }}>50+ landmark projects</strong> across residential, commercial, renovation, and institutional sectors. We've built a legacy defined by precision and passion.
                    </p>
                </div>

                {/* Our Journey */}
                <div style={cardStyle}>
                    <h2 style={{ ...sectionTitleStyle, textAlign: 'left', fontSize: '28px', marginBottom: '25px' }}>
                        Our Journey
                    </h2>
                    <p style={{ marginBottom: '25px', fontSize: '18px', lineHeight: '1.8' }}>
                        Founded on the principles of integrity and craftsmanship, we've grown into a trusted name by prioritizing quality, safety, and client collaboration. Our portfolio spans:
                    </p>

                    <ul style={iconListStyle}>
                        <li style={iconListItemStyle}>
                            <span style={{ marginRight: '12px', fontSize: '24px' }}></span>
                            <div>
                                <strong style={{ color: 'white' }}>Residential:</strong> Custom-built homes tailored to modern lifestyles.
                            </div>
                        </li>
                        <li style={iconListItemStyle}>
                            <span style={{ marginRight: '12px', fontSize: '24px' }}></span>
                            <div>
                                <strong style={{ color: 'white' }}>Commercial:</strong> Dynamic workspaces designed to inspire productivity.
                            </div>
                        </li>
                        <li style={iconListItemStyle}>
                            <span style={{ marginRight: '12px', fontSize: '24px' }}></span>
                            <div>
                                <strong style={{ color: 'white' }}>Renovation:</strong> Breathing new life into existing structures.
                            </div>
                        </li>
                        <li style={iconListItemStyle}>
                            <span style={{ marginRight: '12px', fontSize: '24px' }}></span>
                            <div>
                                <strong style={{ color: 'white' }}>Institutional:</strong> Building future-ready schools and community hubs.
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Why Partner With Us */}
                <div>
                    <h2 style={{ ...sectionTitleStyle, marginBottom: '40px', marginTop: '60px' }}>
                        Why Partner With Us?
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                        <div style={{ backgroundColor: '#252525', padding: '30px', textAlign: 'center', borderTop: '3px solid #f39c12' }}>
                            <h3 style={{ color: 'white', fontSize: '22px', marginBottom: '15px' }}>Proven Expertise</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                8 years of industry-leading innovation.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#252525', padding: '30px', textAlign: 'center', borderTop: '3px solid #f39c12' }}>
                            <h3 style={{ color: 'white', fontSize: '22px', marginBottom: '15px' }}>Diverse Portfolio</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                Mastery across all construction sectors.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#252525', padding: '30px', textAlign: 'center', borderTop: '3px solid #f39c12' }}>
                            <h3 style={{ color: 'white', fontSize: '22px', marginBottom: '15px' }}>Client-Centric Approach</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                Your vision drives every blueprint.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div style={{ textAlign: 'center', marginTop: '70px', marginBottom: '50px' }}>
                    <p style={{ fontSize: '20px', lineHeight: '1.9', maxWidth: '900px', margin: '0 auto 30px', color: '#ccc' }}>
                        At Pro Constructions, we don't just erect buildings—we create spaces where lives thrive, businesses flourish, and communities connect. With a team of seasoned professionals and a relentless commitment to excellence, we're here to build your tomorrow, today.
                    </p>

                    <h3 style={{ fontSize: '32px', fontWeight: '700', color: 'white', marginTop: '40px', letterSpacing: '1px' }}>
                        Build with Confidence. Build with Pro.
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default About;

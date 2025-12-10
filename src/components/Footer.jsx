const Footer = () => {
    const footerStyle = {
        backgroundColor: '#1c1c1c',
        color: '#666',
        padding: '50px 0',
        fontSize: '13px',
        borderTop: '1px solid #252525'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '0 20px',
        flexWrap: 'wrap'
    };

    const linkStyle = {
        marginLeft: '20px',
        color: '#666',
        transition: 'color 0.3s'
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div>
                    &copy; {new Date().getFullYear()} Pro Constructions   |   All Rights Reserved
                </div>
                <div className="social-links">
                    {/* Pseudo-social links */}
                    <a href="#" style={linkStyle}>FB</a>
                    <a href="#" style={linkStyle}>TW</a>
                    <a href="#" style={linkStyle}>IG</a>
                    <a href="#" style={linkStyle}>YT</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

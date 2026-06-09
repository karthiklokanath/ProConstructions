import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const showForm = false; // Set to true to enable the "Send a Message" form card later

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            
            // Auto hide success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    const heroStyle = {
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        color: '#ffffff'
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)', paddingTop: '90px', transition: 'background-color 0.3s ease' }}>
            {/* Hero Banner */}
            <section style={heroStyle}>
                <span style={{ fontSize: '12px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '15px', color: '#f39c12', fontWeight: '600' }}>
                    Contact Us
                </span>
                <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '15px', letterSpacing: '-1px' }}>
                    Get In Touch
                </h1>
                <p style={{ fontSize: '18px', maxWidth: '600px', opacity: 0.9, lineHeight: 1.6 }}>
                    Let's collaborate on your next construction or interior design project.
                </p>
            </section>

            {/* Main Content */}
            <section className="contact-section">
                <div className="container" style={{ maxWidth: '1280px' }}>
                    <div className="contact-layout" style={!showForm ? { gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', alignItems: 'stretch' } : {}}>
                        
                        {!showForm ? (
                            <>
                                {/* Office Address Card */}
                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 20px', minHeight: '280px' }}>
                                    <div className="contact-icon-wrapper" style={{ marginBottom: '15px' }}>
                                        <MapPin size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Office</h3>
                                        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                            2nd stage, 3rd cross, vinoba nagar,<br />
                                            near vikasa school,<br />
                                            shivamogga 577201
                                        </p>
                                    </div>
                                </div>
 
                                {/* Call & Email Card */}
                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 20px', minHeight: '280px' }}>
                                    <div className="contact-icon-wrapper" style={{ marginBottom: '15px' }}>
                                        <Phone size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Call & Email</h3>
                                        <a href="tel:+919611585497" style={{ fontSize: '16px', display: 'block', margin: '4px 0' }}>
                                            +91-9611585497 <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>(Naveen.L)</span>
                                        </a>
                                        <a href="tel:+919632509455" style={{ fontSize: '16px', display: 'block', margin: '4px 0' }}>
                                            +91-9632509455 <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>(Vijay.M)</span>
                                        </a>
                                        <a href="mailto:admin@proconstructionsandinteriors.com" style={{ fontSize: '14px', display: 'block', marginTop: '12px', wordBreak: 'break-all' }}>
                                            admin@proconstructionsandinteriors.com
                                        </a>
                                    </div>
                                </div>
 
                                {/* Online Portals Card */}
                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 20px', minHeight: '280px' }}>
                                    <div className="contact-icon-wrapper" style={{ marginBottom: '15px' }}>
                                        <Globe size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Connect Online</h3>
                                        <a href="https://www.proconstructionsandinteriors.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', display: 'block', margin: '6px 0', wordBreak: 'break-all' }}>
                                            www.proconstructionsandinteriors.com
                                        </a>
                                        <a href="https://instagram.com/proconstructionss" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', display: 'block', margin: '6px 0' }}>
                                            @proconstructionss (Instagram)
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Left Column: 5 Info Cards */}
                                <div className="contact-info-column">
                                    {/* Address Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Our Office</h3>
                                            <p>
                                                2nd stage, 3rd cross, vinoba nagar,<br />
                                                near vikasa school,<br />
                                                shivamogga 577201
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <Phone size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Call Us</h3>
                                            <a href="tel:+919611585497">+91-9611585497 (Naveen.L)</a>
                                            <a href="tel:+919632509455" style={{ marginTop: '4px' }}>+91-9632509455 (Vijay.M)</a>
                                        </div>
                                    </div>

                                    {/* Email Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <Mail size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Email Us</h3>
                                            <a href="mailto:admin@proconstructionsandinteriors.com">admin@proconstructionsandinteriors.com</a>
                                        </div>
                                    </div>

                                    {/* Website Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <Globe size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Our Website</h3>
                                            <a href="https://www.proconstructionsandinteriors.com" target="_blank" rel="noopener noreferrer">
                                                www.proconstructionsandinteriors.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Instagram Card */}
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <Instagram size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Follow Us</h3>
                                            <a href="https://instagram.com/proconstructionss" target="_blank" rel="noopener noreferrer">
                                                @proconstructionss
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Interactive Form */}
                                {showForm && (
                                    <div className="contact-form-card">
                                        <h2>Send a Message</h2>
                                        <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                                        
                                        {submitSuccess && (
                                            <div className="success-message-card">
                                                <CheckCircle size={20} />
                                                <span>Thank you! Your message has been sent successfully.</span>
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-input" 
                                                    required 
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="form-group-row">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input 
                                                        type="email" 
                                                        id="email" 
                                                        name="email" 
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-input" 
                                                        required 
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <input 
                                                        type="tel" 
                                                        id="phone" 
                                                        name="phone" 
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="form-input" 
                                                        placeholder="+91 XXXXX XXXXX"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea 
                                                    id="message" 
                                                    name="message" 
                                                    rows="5" 
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-input" 
                                                    required 
                                                    placeholder="Tell us about your project or inquiry..."
                                                    style={{ resize: 'vertical' }}
                                                ></textarea>
                                            </div>

                                            <button 
                                                type="submit" 
                                                className="form-submit-btn"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send size={16} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section style={{ padding: '0 0 80px 0', backgroundColor: 'var(--color-bg-primary)', transition: 'background-color 0.3s ease' }}>
                <div className="container">
                    <h2 style={{ fontSize: '28px', fontWeight: '500', marginBottom: '24px', textAlign: 'center', color: 'var(--color-text-primary)' }}>
                        Find Our Location
                    </h2>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
                        <iframe
                            title="Pro Constructions Location Map"
                            src="https://maps.google.com/maps?q=13.9496514,75.5626231+(Pro+constructions+and+interiors)&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

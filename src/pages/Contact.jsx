import { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const showForm = false;

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

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="page-wrapper">
            <section className="page-hero">
                <div
                    className="hero-bg"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <span className="page-hero-badge">Contact Us</span>
                    <h1 className="page-hero-title">Get In Touch</h1>
                    <p className="page-hero-subtitle">
                        Let's collaborate on your next construction or interior design project.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container" style={{ maxWidth: '1280px' }}>
                    <div
                        className="contact-layout"
                        style={!showForm ? { gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', alignItems: 'stretch' } : undefined}
                    >
                        {!showForm ? (
                            <>
                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="contact-icon-wrapper">
                                        <MapPin size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Our Office</h3>
                                        <a href="https://maps.app.goo.gl/oXg2Y2HQwkEQewRt5" target="_blank" rel="noopener noreferrer">
                                            2nd stage, 3rd cross, vinoba nagar,<br />
                                            near vikasa school,<br />
                                            shivamogga 577201
                                        </a>
                                        <a href="https://maps.app.goo.gl/oXg2Y2HQwkEQewRt5" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: '500', marginTop: '12px' }}>
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="contact-icon-wrapper">
                                        <Phone size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Call & Email</h3>
                                        <a href="tel:+919611585497">
                                            +91-9611585497 <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>(Naveen.L)</span>
                                        </a>
                                        <a href="tel:+919632509455">
                                            +91-9632509455 <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>(Vijay.M)</span>
                                        </a>
                                        <a href="mailto:admin@proconstructionsandinteriors.com" style={{ marginTop: '12px', wordBreak: 'break-all' }}>
                                            admin@proconstructionsandinteriors.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="contact-icon-wrapper">
                                        <Globe size={32} />
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Connect Online</h3>
                                        <a href="https://www.proconstructionsandinteriors.com" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>
                                            www.proconstructionsandinteriors.com
                                        </a>
                                        <a href="https://instagram.com/proconstructionss" target="_blank" rel="noopener noreferrer">
                                            @proconstructionss (Instagram)
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="contact-info-column">
                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Our Office</h3>
                                            <a href="https://maps.app.goo.gl/oXg2Y2HQwkEQewRt5" target="_blank" rel="noopener noreferrer">
                                                <p style={{ margin: 0 }}>
                                                    2nd stage, 3rd cross, vinoba nagar,<br />
                                                    near vikasa school,<br />
                                                    shivamogga 577201
                                                </p>
                                            </a>
                                            <a href="https://maps.app.goo.gl/oXg2Y2HQwkEQewRt5" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: '500', marginTop: '8px' }}>
                                                View on Google Maps
                                            </a>
                                        </div>
                                    </div>

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

                                    <div className="contact-info-card">
                                        <div className="contact-icon-wrapper">
                                            <Mail size={24} />
                                        </div>
                                        <div className="contact-card-content">
                                            <h3>Email Us</h3>
                                            <a href="mailto:admin@proconstructionsandinteriors.com">admin@proconstructionsandinteriors.com</a>
                                        </div>
                                    </div>

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
                                                />
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

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <h2 className="section-title">Find Our Location</h2>
                    <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                        <iframe
                            title="Pro Constructions Location Map"
                            src="https://maps.google.com/maps?q=13.9496667,75.5626111+(Pro+constructions+and+interiors)&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

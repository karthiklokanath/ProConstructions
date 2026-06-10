import { useNavigate } from 'react-router-dom';
import { DraftingCompass, Home, Building2, Palette, Hammer, Ruler } from 'lucide-react';

function Services() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="page-hero-badge">What We Do</span>
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">Architecture and Engineering, Interior Design.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <span className="section-badge">Expertise</span>
            <h2 className="section-title">Comprehensive Solutions</h2>
            <div className="section-divider" />
          </header>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon-wrapper">
                <DraftingCompass size={32} strokeWidth={1.5} />
              </div>
              <h3>Architecture</h3>
              <p>From concept to completion, we design structures that inspire and endure, blending modern aesthetics with functional excellence.</p>
            </article>

            <article className="service-card">
              <div className="service-icon-wrapper">
                <Home size={32} strokeWidth={1.5} />
              </div>
              <h3>Residential Construction</h3>
              <p>Custom-built homes tailored to your lifestyle, crafted with premium materials and meticulous attention to detail.</p>
            </article>

            <article className="service-card">
              <div className="service-icon-wrapper">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3>Commercial Construction</h3>
              <p>Dynamic workspaces and commercial facilities designed to drive productivity and make a lasting impression.</p>
            </article>

            <article className="service-card">
              <div className="service-icon-wrapper">
                <Palette size={32} strokeWidth={1.5} />
              </div>
              <h3>Interior Design</h3>
              <p>Transforming interiors into stunning living and working environments that reflect your unique style and personality.</p>
            </article>

            <article className="service-card">
              <div className="service-icon-wrapper">
                <Hammer size={32} strokeWidth={1.5} />
              </div>
              <h3>Renovation & Remodeling</h3>
              <p>Breathing new life into existing structures with expert renovation services that modernize while preserving character.</p>
            </article>

            <article className="service-card">
              <div className="service-icon-wrapper">
                <Ruler size={32} strokeWidth={1.5} />
              </div>
              <h3>Engineering</h3>
              <p>Precision engineering solutions ensuring structural integrity, safety compliance, and long-term durability.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Have a Project in Mind?</h2>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>
            Let's Talk
          </button>
        </div>
      </section>
    </main>
  );
}

export default Services;

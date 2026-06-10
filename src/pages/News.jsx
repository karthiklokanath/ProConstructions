function News() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="page-hero-badge">Stay Updated</span>
          <h1 className="page-hero-title">News & Insights</h1>
          <p className="page-hero-subtitle">Latest updates and articles.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <span className="section-badge">Latest</span>
            <h2 className="section-title">Recent Updates</h2>
            <div className="section-divider" />
          </header>

          <div className="news-grid">
            <article className="news-card">
              <div
                className="news-card-image"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="news-card-body">
                <span className="news-card-date">June 2025</span>
                <h3>New Residential Project Completed</h3>
                <p>Our team successfully delivered a modern residential complex featuring sustainable design and premium finishes.</p>
              </div>
            </article>

            <article className="news-card">
              <div
                className="news-card-image"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="news-card-body">
                <span className="news-card-date">May 2025</span>
                <h3>Pro Constructions Wins Design Award</h3>
                <p>Recognized for excellence in commercial architecture with our innovative approach to sustainable building.</p>
              </div>
            </article>

            <article className="news-card">
              <div
                className="news-card-image"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="news-card-body">
                <span className="news-card-date">April 2025</span>
                <h3>Expanding Our Interior Design Services</h3>
                <p>We are thrilled to announce the expansion of our interior design division with new creative talent joining the team.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default News;
